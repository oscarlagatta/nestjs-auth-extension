import { CoffeesPermission } from '../../coffees/coffees.permission';

export const Permission = {
  ...CoffeesPermission,
};

// Export the permission TYPE, so we can use it as an input argument type
// of the decorator

export type PermissionType = CoffeesPermission; // | ...other permission enums
