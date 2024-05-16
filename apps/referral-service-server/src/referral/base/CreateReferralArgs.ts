/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReferralCreateInput } from "./ReferralCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateReferralArgs {
  @ApiProperty({
    required: true,
    type: () => ReferralCreateInput,
  })
  @ValidateNested()
  @Type(() => ReferralCreateInput)
  @Field(() => ReferralCreateInput, { nullable: false })
  data!: ReferralCreateInput;
}

export { CreateReferralArgs as CreateReferralArgs };
