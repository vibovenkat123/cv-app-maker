import { writable } from "svelte/store";
let id = 0;
export const generalInfo = writable({
  firstName: "",
  lastName: "",
  jobTitle: "",
  description: "",
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const experiences: any = writable([
  {
    from: "From",
    to: "To",
    id,
    title: "Job Title",
    location: "Location",
    description: "Short Description",
  },
]);
export function createExperience(
  from: string,
  to: string,
  title: string,
  location: string,
  description: string
) {
  id += 1;
  experiences.update(
    (
      array: {
        from: string;
        to: string;
        id: number;
        title: string;
        location: string;
        description: string;
      }[]
    ) => {
      array.push({
        from,
        to,
        id,
        title,
        location,
        description,
      });
      return array;
    }
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const education: any = writable([
  {
    from: "From",
    to: "To",
    id,
    degree: "Degree",
    location: "Name of school",
  },
]);
export const personalInfo = writable({
  address: "",
  phone: "",
  email: "",
});
export function createEducation(
  from: string,
  to: string,
  degree: string,
  location: string
) {
  id += 1;
  education.update(
    (
      array: {
        from: string;
        to: string;
        id: number;
        degree: string;
        location: string;
      }[]
    ) => {
      const obj = {
        from,
        to,
        id,
        degree,
        location,
      };
      array.push(obj);
      return array;
    }
  );
}
