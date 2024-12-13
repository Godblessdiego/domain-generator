console.log("Cualquier string");

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".lo", ".es"];

pronoun.forEach((p) => {
  adj.forEach((a) => {
    noun.forEach((n) => {
      extensions.forEach((ex) => {
        let domain = p + a + n + ex;
        console.log(domain);
      });
    });
  });
});
