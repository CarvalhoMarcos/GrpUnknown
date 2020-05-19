module.exports = {
  dialect: "postgres",
  host: "labeng.ciyvym3yvhge.us-east-2.rds.amazonaws.com",
  username: "LabEng",
  password: "LabEngPass",
  port: 5432,
  database: "LabEng",
  define:{
    timestamps:true,
    underscored:true
  }
};

/*module.exports = {
  dialect: "postgres",
  host: "postgres://postgres:logan@localhost:5432/Hospital",
  username: "postgres",
  password: "logan",
  port: 5432,
  database: "Hospital",
  define: {
    timestamps: true,
    underscored: true
  }
};*/