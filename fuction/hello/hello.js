var faunadb = require("faunadb");
var q = faunadb.query;

const handler = async (event) => {
  // if(event.httpMethod !== "POST"){
  // return{statusCode:405,body:"Method not allowed"}
  // }

  try {
    const messageBody = JSON.parse(event.body);

    var adminClient = new faunadb.Client({
      secret: "fnAEbGy24HAAQG_oFaLFcHePm9HoA0x83lO88vOG",
      domain: "db.us.fauna.com",

    });

    const result = await adminClient.query(
      q.Create(q.Collection("messages"), {
        data: { detail: messageBody.message },
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: result.ref.id }),
      // // more keys you can return:
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
