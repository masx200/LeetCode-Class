import { test, assert } from "vitest";
import { runScript } from "../index";
import Operations from "./Operations";
test("run-script", () => {
    assert.deepEqual(
        runScript(
            [
                "Operations",
                "minus",
                "minus",
                "multiply",
                "multiply",
                "divide",
                "divide",
            ],
            [
                [],
                [0, -2147483647],
                [-1, 2147483647],
                [-1, -2147483647],
                [-100, 21474836],
                [2147483647, -1],
                [-2147483648, 1],
            ],
            Operations
        ),
        [
            null,
            2147483647,
            -2147483648,
            2147483647,
            -2147483600,
            -2147483647,
            -2147483648,
        ]
    );
});
