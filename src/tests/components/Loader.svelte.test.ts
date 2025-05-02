import { render } from "@testing-library/svelte";
import Loader from "components/Loader.svelte";
import { describe, expect, test } from "vitest";

describe('<Loader />', () => {
  test('should render h1', () => {
		const {findByTestId} = render(Loader);

    const loader = findByTestId('loader');

    expect(loader).toBeDefined();
	});
});
