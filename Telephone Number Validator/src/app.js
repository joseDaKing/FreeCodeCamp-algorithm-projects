const telephoneValidator = string => (
    /^(1?\s?)(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g.test(string)
);