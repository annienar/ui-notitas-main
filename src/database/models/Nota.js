module.exports = function(sequelize, dataTypes) {
    let alias = "Nota";
    let cols = {
                    id: {
                        autoIncrement: true,
                        primaryKey: true,
                        type: dataTypes.INTEGER
                    },
                    titulo: { 
                        allowNull: false,
                        type: dataTypes.STRING
                    },
                    texto: {
                        allowNull: true,
                        type: dataTypes.STRING
                    }
                };
                
    let config = {
        tableName: "notas",
        timestamps: true,
        underscored: true,
        paranoid: true
    }       

    let Nota = sequelize.define(alias, cols, config);
    return Nota;

}