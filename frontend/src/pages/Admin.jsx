import { useState } from "react";

const API_URL = "http://localhost:5000/api/love";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [form, setForm] = useState({
    birthday: "",
    anniversary: "",
    messageEn: "",
    messageTa: "",
    images: "",
    resetProposal: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submit = async () => {
    if (!password) {
      alert("Enter admin password");
      return;
    }

    const body = {
      birthday: form.birthday,
      anniversary: form.anniversary,
      messageEn: form.messageEn,
      messageTa: form.messageTa,
      images: form.images.split(",").map((i) => i.trim()),
    };

    if (form.resetProposal) {
      body.proposalAnswer = null;
      body.proposalAt = null;
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        password: password,
      },
      body: JSON.stringify(body),
    });

    if (res.status === 401) {
      alert("❌ Wrong password");
      return;
    }

    if (!res.ok) {
      alert("❌ Upload failed");
      return;
    }

    alert("✅ Data uploaded successfully ❤️");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">🔐 Admin Panel</h1>

        {/* Password */}
        <input
          type="password"
          placeholder="Admin Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Birthday */}
        <label className="text-sm font-semibold">Birthday</label>
        <input
          type="date"
          name="birthday"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        {/* Anniversary */}
        <label className="text-sm font-semibold">Anniversary</label>
        <input
          type="date"
          name="anniversary"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        {/* English Message */}
        <textarea
          name="messageEn"
          placeholder="English message"
          className="w-full border p-3 rounded mb-4"
          rows="3"
          onChange={handleChange}
        />

        {/* Tamil Message */}
        <textarea
          name="messageTa"
          placeholder="Tamil message"
          className="w-full border p-3 rounded mb-4"
          rows="3"
          onChange={handleChange}
        />

        {/* Images */}
        <input
          type="text"
          name="images"
          placeholder="Image URLs (comma separated)"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        {/* Reset Proposal */}
        <label className="flex items-center gap-2 mb-4">
          <input type="checkbox" name="resetProposal" onChange={handleChange} />
          Reset Proposal Answer
        </label>

        {/* Submit */}
        <button
          onClick={submit}
          className="w-full bg-pink-500 text-white py-3 rounded-xl text-lg"
        >
          Upload ❤️
        </button>
      </div>
    </div>
  );
}
