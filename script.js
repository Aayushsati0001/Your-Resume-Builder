function generateResume() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const education = document.getElementById("education").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const experience = document.getElementById("experience").value.trim();
  const projects = document.getElementById("projects").value.trim();

  let resume = `
==============================
         RESUME
==============================
1. Name       : ${name}
2. Email      : ${email}
3. Phone      : ${phone}

4. Education  : ${education}
5. Skills     : ${skills}
6. Experience : ${experience}
7. Projects   : ${projects}

==============================
`;

  document.getElementById("resumeOutput").innerText = resume;

  // Score logic
  let score = 0;
  if (name) score += 10;
  if (email) score += 10;
  if (phone) score += 10;
  if (education) score += 20;
  if (skills) score += 20;
  if (experience) score += 20;
  if (projects) score += 10;

  let comment = score >= 90 ? "🌟 Excellent Resume!" :
                score >= 70 ? "✅ Good Resume. Just polish it." :
                "⚠ Add more info to make it better.";

  document.getElementById("resumeScore").innerText = 📊 Resume Score: ${score}/100 — ${comment};
}

function toggleTheme() {
  document.body.classList.toggle('light');
}

function downloadResume() {
  const content = document.getElementById("resumeOutput").innerText;
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "My_Resume.txt";
  link.click();
}
