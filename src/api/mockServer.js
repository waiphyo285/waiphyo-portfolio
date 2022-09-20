import { setupWorker, rest } from 'msw'
import data from "../__mock__/data.json";

// Add an extra delay to all endpoints
const ARTIFICIAL_DELAY_MS = 2000

const worker = setupWorker(
    rest.get('/mockApi/me', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(data.personal)
        )
    }),
    rest.get('/mockApi/navlist', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(data.navlist)
        )
    }),
    rest.get('/mockApi/content', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(data.contents)
        )
    }),
    rest.get('/mockApi/project', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(data.projects)
        )
    }),
    rest.get('/mockApi/contact', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(data.contacts)
        )
    }),
    rest.get('/mockApi/banner', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(data.banners)
        )
    }),
    rest.get('/mockApi/social', (req, res, ctx) => {
        return res(
            ctx.delay(ARTIFICIAL_DELAY_MS),
            ctx.json(data.socials)
        )
    }),
)

export default worker;