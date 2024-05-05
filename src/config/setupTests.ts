import { server } from "@/mocks/worker";
import { afterAll, afterEach, beforeAll } from "vitest";

afterAll(() => server.close())
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())