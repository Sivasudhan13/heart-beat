export default function SecretLetter({ unlocked }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-10 text-center">
      {unlocked ? (
        <>
          <h2 className="text-2xl font-bold mb-4">💌 My Secret Letter</h2>
          <p className="text-red-600 text-lg">
            7 years… countless memories… You are my lover, wife, papa,
            everything ❤️
          </p>
        </>
      ) : (
        <p className="text-xl">🔒 Unlocks on Anniversary</p>
      )}
    </div>
  );
}
