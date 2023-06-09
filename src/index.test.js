import { describe, it, expect } from 'vitest';
import { render } from "@testing-library/svelte";
import Test from "./Test.svelte";

it("should call onMount", async () => {
    render(Test);
})
