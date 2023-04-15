import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { REQUEST_USER_KEY } from '../iam.constants';
import { ActiveUserData } from '../interfaces/active-user.data';

export const ActiveUser = createParamDecorator(
  (field: keyof ActiveUserData | undefined, ctx: ExecutionContext) => {
    // Grabbing the request object form the execution context
    // using switchToHttp and calling the getRequest method.
    const request = ctx.switchToHttp().getRequest();
    // From the request object we select the decoded user payload
    // and assign it to the user variable
    const user: ActiveUserData | undefined = request[REQUEST_USER_KEY];
    // Last, if the field parameter was passed into the decorator
    // we want to grab the corresponding field property from the
    // user OBJECT, otherwise we return the entire user object.
    return field ? user?.[field] : user;
  },
);
