const db = require("../../database/models");
const {Role} = db;

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    return res.json({
      meta: {
        status: 200,
        total: roles.length,
        url: "api/roles",
      },
      data: roles,
    });
  } catch (error) {
    return console.log(error);
  }
};

const getOneRole = async (req, res) => {
  try {
    const {id} = req.params;
    const role = await Role.findByPk(id);
    return res.json({
      meta: {
        status: 200,
        url: "api/roles/:id",
      },
      data: role,
    });
  } catch (error) {
    return console.log(error);
  }
};

const createRole = async (req, res) => {
  try {
    const newRole = await Role.create(req.body);
    return res.json({
      meta: {
        status: 200,
        url: "api/roles/create",
      },
      data: newRole,
    });
  } catch (error) {
    return console.log(error);
  }
};

const dropRole = async (req, res) => {
  try {
    await Role.destroy({
      truncate: true,
    });
    return res.json({
      meta: {
        status: 200,
        url: "api/roles/delete",
        message: "Table roles deleted",
      },
      data: null,
    });
  } catch (error) {
    return console.log(error);
  }
};

module.exports = {getAllRoles, getOneRole, createRole, dropRole};
