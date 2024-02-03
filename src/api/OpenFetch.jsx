const openai = require("openai");

async function genererItineraire(ville, dateDebut, dateFin) {
  const prompt = `Crée un itinéraire touristique détaillé pour ${ville} entre le ${dateDebut} et le ${dateFin}. Inclus des informations sur des restaurants, des musées, des parcs et des activités culturelles.`;

  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo", 
      prompt: prompt,
      max_tokens: 150,
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Erreur lors de la génération de l'itinéraire :", error);
    return null;
  }
}
