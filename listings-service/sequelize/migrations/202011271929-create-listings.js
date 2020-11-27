const { QueryTypes, queryInterface, DataTypes } = require("sequelize");

module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTabel("listings", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }

    },
    {
        charset: "utf8"
    });
};