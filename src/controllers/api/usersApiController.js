const db = require("../../database/models");

const getAllUsers = async (req, res) => {
  const count = await db.User.count();
  const users = await db.User.findAll({
    attributes: { exclude: ["password", "role_id"] },
  });
  const detail = users.forEach((user) => {
    user.dataValues.detail = `http://localhost:3001/api/users/${user.id}`;
  });

  let response = {
    meta: {
      status: 200,
      total: count,
      url: "api/users/all",
    },
    data: {
      count,
      users,
      detail,
    },
  };

  return res.json(response);
};

const getOneUser = async (req, res) => {
  const user = await db.User.findByPk(req.params.id, {
    attributes: { exclude: ["password", "role_id"] },
  });

  return res.json({
    user,
    avatarUrl: `http://localhost:3001/images/avatars/${user.avatar}`,
  });
};

const lastFiveUsers = (req, res) => {
  db.User.findAll({
    order: [["id", "DESC"]],
    limit: 5,
  }).then(function (users) {
    res.json({
      meta: {
        status: 200,
        url: "/api/users/lastFiveUsers",
      },
      data: users,
    });
  });
};

module.exports = { getAllUsers, getOneUser, lastFiveUsers };
