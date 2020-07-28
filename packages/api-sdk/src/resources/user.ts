class User {
  private creatorID: string;

  constructor(creatorID: string) {
    this.creatorID = creatorID;
  }

  public getCreatorID() {
    return this.creatorID;
  }
}

export default User;
