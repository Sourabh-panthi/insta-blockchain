import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "gowg2zvu",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skV9SLxCWUvg0esPsTGRkE66GiasQCx9hjfoLwXBwmOMrRNn65JErCFISXW8YpMb6HW8hLyHW1VHInJd2s6eZ6GIiM40X0vFo5DjMSG0ZSV2eJcnbCOikkNBPezN99L0IskwoNvOcXVmxQkrEc1rpsXLVNWnX8rysW6Smocgqbl1u9iRS3AD",
  useCdn: false,
});
