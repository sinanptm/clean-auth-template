export enum PutRoutes {
  UpdateProfile = "/profile",
}

export enum PutRoutesWithParams {
  /**
   * @param id = UserId - required
   */
  UpdateUser = "/admin/user/:id",
}
