const { ApolloServer, gql } = require("apollo-server");

const posts = [
  {
    title: "test1",
    body: "xxxx",
  },
  {
    title: "test2",
    body: "yyyy",
  },
];

// schemaの定義
// 問い合わせの定義
const typeDefs = gql`
  type Post {
    title: String
    body: String
  }

  type Query {
    test: [Post]
  }
`; //データを取得するQueryの中にtestという項目があったらPostの配列として返す

// resolverの定義
// リクエストが来た時にtest(key)が呼ばれてどのようにデータを返すか(posts)を定義
const resolvers = {
  Query: {
    test: () => posts,
  },
};

// サーバーの起動
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
