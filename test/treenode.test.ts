import { test, assert } from "vitest";
import { TreeNode } from "../index";
test("tree node", () => {
    assert.deepEqual(
        TreeNode.create([1, 2, 3]),
        new TreeNode(1, new TreeNode(2), new TreeNode(3))
    );
    assert.deepEqual([1, 2, 3, 4], TreeNode.create([1, 2, 3, 4]).show());
    assert.deepEqual(
        TreeNode.create([1, 2, 3, 4]),
        new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))
    );
});
