import { CreatorID } from '@/models';

class User {
  private creatorID: CreatorID;

  constructor(creatorID: CreatorID) {
    this.creatorID = creatorID;
  }

  public getCreatorID() {
    return this.creatorID;
  }
}

export default User;
