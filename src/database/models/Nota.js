module.exports = function(sequelize, dataTypes) {
    let alias = "Nota";
    let cols = {
                    id: {
                        autoIncrement: true,
                        primaryKey: true,
                        type: dataTypes.INTEGER (11)
                    },
                    titulo: { 
                        allowNull: false,
                        type: dataTypes.STRING (45)
                    },
                    texto: {
                        allowNull: true,
                        type: dataTypes.STRING (60)
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