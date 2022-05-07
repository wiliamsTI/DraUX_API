const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');
class UserService {
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const user = await models.Admin.create({
      ...data,
      password: hash,
    });
    return user;
  }

  async findAll() {
    const allUsers = await models.Admin.findAll();
    return allUsers;
  }
  async findOne(id) {
    const user = await models.Admin.findByPk(id, {
      include: ['categories'],
    });
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }
  async update(id, changes) {
    const user = await this.findOne(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    const updatedUser = await user.update(changes);
    return updatedUser;
  }
  async delete(id) {
    const user = await this.findOne(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    await user.destroy();
    return { id };
  }
  async findEmailAdmin(email) {
    const response = await models.Admin.findOne({
      where: { email },
    });
    return response;
  }
}

module.exports = UserService;
