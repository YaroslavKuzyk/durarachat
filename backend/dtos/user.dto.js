class UserDto {
  name;
  email;
  id;
  isActivated;
  avatar;

  constructor(model) {
    this.name = model.name;
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.avatar = model.avatar;
  }
}

export default UserDto;
