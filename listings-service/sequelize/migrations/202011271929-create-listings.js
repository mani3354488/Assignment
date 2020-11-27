const { QueryTypes, QueryInterface, DataTypes } = require("sequelize");

module.exports.up = (QueryInterface, DataTypes) => {
    return QueryInterface.createTabel("listings", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEHER.UNSIGNED
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