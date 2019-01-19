import * as Koa from "koa";

const Application: Koa = new Koa();

Application.use(async (ctx: Koa.Context) => {
  ctx.body = "Hello World";
});

export default Application;
