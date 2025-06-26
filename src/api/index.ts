import { db } from "ponder:api";
import schema from "ponder:schema";
import { Hono } from "hono";
import { client, graphql } from "ponder";

const app = new Hono();

app.use("/sql/*", client({ db, schema }));

app.use("/", graphql({ db, schema }));
app.use("/graphql", graphql({ db, schema }));
app.get('/test', (c) => c.text('PONDER AND HONOO!! /'))

app.use("/db/*", client({ db, schema }));

export default app;
