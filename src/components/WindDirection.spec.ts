import { shallowMount } from "@vue/test-utils";
import WindDirection from "./WindDirection.vue";

describe("WindDirection", () => {
    it("renders the wind direction icon", () => {
        const wrapper = shallowMount(WindDirection, {
            props: {
                degrees: 90,
            },
        });
        expect(wrapper).toBeTruthy();
    });

    it("rendes the wind direction icon", () => {
        const wrapper = shallowMount(WindDirection, {
            props: {
                degrees: 90,
            },
        });
        expect(wrapper.find("span").text()).toContain("⬇");
    });
});