import { setupWorker, rest } from 'msw'

import me from "../__mock__/me.json";
import auth from "../__mock__/auth.json";
import navlist from "../__mock__/navlist.json";
import contents from "../__mock__/contents.json";
import projects from "../__mock__/projects.json";
import contacts from "../__mock__/contacts.json";
import banners from "../__mock__/banners.json";
import socials from "../__mock__/socials.json";

// Add an extra delay to all endpoints
const ARTIFICIAL_DELAY_MS = 2000

const worker = setupWorker(
    rest.post('/mockApi/login', (req, res, ctx) => {
        const { username, password } = req.body;
        const { username: mockUser, password: mockPass } = auth.result;
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json((username === mockUser && password === mockPass) ? auth.result : null)
        )
    }),
    rest.get('/mockApi/me', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(me.result)
        )
    }),
    rest.get('/mockApi/navlist', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(navlist.result)
        )
    }),
    rest.get('/mockApi/content', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(contents.result)
        )
    }),
    rest.get('/mockApi/project', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(projects.result)
        )
    }),
    rest.get('/mockApi/contact', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(contacts.result)
        )
    }),
    rest.get('/mockApi/banner', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(banners.result)
        )
    }),
    rest.get('/mockApi/social', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(socials.result)
        )
    }),
)

export default worker;