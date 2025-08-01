Your task is to implement a Web API that finds the best person for a job.
The API should support the following request:

GET /candidates/search?skills=javascript,express,mongodb
– find and return the candidate that has the most skills from the given set (comma-separated). In this example, we request three skills. If a candidate possesses all of the listed skills (3 out of 3), or has more than the other candidates, then they are considered the best and should be returned. The response should have Content-Type set to application/json and the response body should be of the below shape:

{
"id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
"name": "John Coder",
"skills": [ "javascript", "es6", "nodejs", "express" ]
}

The HTTP response code must be 200 if a candidate is found with at least one matching skill, or 404 if no suitable candidates exist.

Each search request should return the candidate with the best coverage of the requested skills – if five different skills are requested, then a candidate who has four of them is better than a candidate who has only three of them, and so on.

\*\*\*If two or more candidates have the same coverage (for example, both have seven out of ten requested skills), any of these candidates may be returned – additional skills (which were not requested) do not matter.

If no candidates match any skills, or no candidates exist at all, then the response must have an HTTP status code of 404. The response body is not important in such cases.

If the request is invalid (no ?skills=... in GET) then status code 400 (Bad Request) must be returned.

HTTP 5xx error codes are considered errors and must not be returned.

Assumptions
skills is an array of strings from 1 to 100 characters, being letters, numbers or hyphens ([a-zA-Z0-9-]+), with a maximum of 10,000 elements); elements in the array or in query strings are not duplicated (there is no [ "skill1", "skill2", "skill1" ]).
