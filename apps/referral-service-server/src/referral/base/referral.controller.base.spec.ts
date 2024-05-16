import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ReferralController } from "../referral.controller";
import { ReferralService } from "../referral.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  creditEarned: 42,
  id: "exampleId",
  referralCode: "exampleReferralCode",
  referralDate: new Date(),
  referredUserId: "exampleReferredUserId",
  updatedAt: new Date(),
  userId: "exampleUserId",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  creditEarned: 42,
  id: "exampleId",
  referralCode: "exampleReferralCode",
  referralDate: new Date(),
  referredUserId: "exampleReferredUserId",
  updatedAt: new Date(),
  userId: "exampleUserId",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    creditEarned: 42,
    id: "exampleId",
    referralCode: "exampleReferralCode",
    referralDate: new Date(),
    referredUserId: "exampleReferredUserId",
    updatedAt: new Date(),
    userId: "exampleUserId",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  creditEarned: 42,
  id: "exampleId",
  referralCode: "exampleReferralCode",
  referralDate: new Date(),
  referredUserId: "exampleReferredUserId",
  updatedAt: new Date(),
  userId: "exampleUserId",
};

const service = {
  createReferral() {
    return CREATE_RESULT;
  },
  referrals: () => FIND_MANY_RESULT,
  referral: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Referral", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ReferralService,
          useValue: service,
        },
      ],
      controllers: [ReferralController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /referrals", async () => {
    await request(app.getHttpServer())
      .post("/referrals")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        referralDate: CREATE_RESULT.referralDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /referrals", async () => {
    await request(app.getHttpServer())
      .get("/referrals")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          referralDate: FIND_MANY_RESULT[0].referralDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /referrals/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/referrals"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /referrals/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/referrals"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        referralDate: FIND_ONE_RESULT.referralDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /referrals existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/referrals")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        referralDate: CREATE_RESULT.referralDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/referrals")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
