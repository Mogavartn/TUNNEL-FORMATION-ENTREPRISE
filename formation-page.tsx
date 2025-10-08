import React, { useState } from 'react';
import { Check, Rocket, Target, Trophy, Flame } from 'lucide-react';

const FormationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: 'FR',
    postalCode: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    // Validation basique
    if (formData.firstName && formData.lastName && formData.email && 
        formData.address && formData.city && formData.postalCode) {
      setCurrentStep(2);
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    alert('Inscription réussie ! (Simulation - backend à implémenter)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Header */}
      <header className="py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="text-white text-4xl font-bold bg-purple-600 px-6 py-3 rounded-lg">
              ANTA2L
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Créez votre <span className="text-purple-400">ENTREPRISE</span>
                <br />
                et Lancez votre <span className="text-purple-400">ACTIVITÉ</span>
                <br />
                avec <span className="text-purple-400">SUCCÈS</span> ! <Rocket className="inline w-12 h-12" />
              </h1>

              <div className="bg-purple-800/50 rounded-lg p-6 mb-6">
                <p className="text-white text-2xl mb-4">
                  ✨<strong>Une idée ?</strong>✨
                </p>
                <p className="text-white text-xl mb-4">
                  On vous montre comment la transformer en business qui cartonne.
                </p>
                <p className="text-white text-xl mb-2">
                  Formation en ligne, pratique et sans bla-bla
                </p>
                <p className="text-white text-2xl font-bold">
                  Un seul paiement de 299€ !
                </p>
              </div>

              <button 
                onClick={() => document.getElementById('formulaire').scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 hover:bg-purple-700 text-white text-2xl font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 w-full md:w-auto"
              >
                👉 OUI ! JE VEUX LA FORMATION
              </button>
            </div>

            {/* Right Column - Form */}
            <div id="formulaire" className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500">
              {/* Step Indicators */}
              <div className="flex gap-4 mb-6">
                <div className={`flex-1 p-3 rounded ${currentStep === 1 ? 'bg-purple-600' : 'bg-gray-700'}`}>
                  <div className="text-white font-bold">
                    <div className="text-2xl">1</div>
                    <div className="text-sm">ÉTAPE 1 :</div>
                    <div className="text-xs">INFORMATIONS SUR L'ACHETEUR</div>
                  </div>
                </div>
                <div className={`flex-1 p-3 rounded ${currentStep === 2 ? 'bg-purple-600' : 'bg-gray-700'}`}>
                  <div className="text-white font-bold">
                    <div className="text-2xl">2</div>
                    <div className="text-sm">ÉTAPE 2 :</div>
                    <div className="text-xs">VÉRIFICATION PAR LE CLIENT</div>
                  </div>
                </div>
              </div>

              {/* Form Step 1 */}
              {currentStep === 1 && (
                <form onSubmit={handleSubmitStep1} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Prénom"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded bg-white border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Nom de famille"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded bg-white border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded bg-white border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                    required
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Adresse complète"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded bg-white border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                    required
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="Ville"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded bg-white border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                    required
                  />

                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded bg-white border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  >
                    <option value="FR">France</option>
                    <option value="BE">Belgique</option>
                    <option value="CH">Suisse</option>
                    <option value="CA">Canada</option>
                  </select>

                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Code postal"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded bg-white border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold py-4 px-6 rounded-lg transition-all"
                  >
                    👉 OUI ! je profite de cette FORMATION !
                    <div className="text-sm mt-1">OUI ! Je veux la formation MAINTENANT !</div>
                  </button>

                  <p className="text-white text-xs text-center">
                    *Vos informations sont sécurisées et ne seront pas partagées.
                  </p>
                </form>
              )}

              {/* Form Step 2 - Payment */}
              {currentStep === 2 && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="bg-purple-700 rounded p-4 mb-4">
                    <div className="text-white">
                      <div className="text-xl font-bold mb-2">Formation Création Entreprise</div>
                      <div className="text-3xl font-bold">299€</div>
                      <div className="text-sm mt-2">Total (TTC)</div>
                    </div>
                  </div>

                  <div className="text-white text-sm mb-4">
                    <p className="mb-2"><strong>Informations de l'acheteur :</strong></p>
                    <p>{formData.firstName} {formData.lastName}</p>
                    <p>{formData.email}</p>
                    <p>{formData.address}</p>
                    <p>{formData.city}, {formData.postalCode}</p>
                  </div>

                  <div className="text-white text-sm mb-4 p-4 bg-gray-800 rounded">
                    <p className="font-bold mb-2">Paiement sécurisé</p>
                    <p>Le paiement sera traité de manière sécurisée via Stripe.</p>
                    <p className="text-xs mt-2">* Cette est une simulation. Le backend doit être implémenté pour traiter les paiements réels.</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold py-4 px-6 rounded-lg transition-all"
                  >
                    Valider ma formation maintenant !
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white text-sm py-2 px-4 rounded-lg transition-all"
                  >
                    Retour
                  </button>

                  <p className="text-white text-xs text-center">
                    * Paiements 100% sûrs et sécurisés *
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12">
            👉 <span className="text-black">POURQUOI CHOISIR CETTE</span>{' '}
            <span className="text-purple-600">FORMATION</span> ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left - Image */}
            <div className="flex justify-center">
              <div className="bg-gray-200 rounded-lg p-8 w-full h-64 flex items-center justify-center">
                <div className="text-gray-500 text-xl">Laptop & Mobile Image</div>
              </div>
            </div>

            {/* Middle - Features */}
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">Contenu clair et accessible</h3>
                <p className="text-lg">Idéal pour débutants, pas besoin de connaissances préalables.</p>
              </div>

              <div className="bg-purple-600 rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Déjà vendu plus de 2 100 fois</h3>
                <p className="text-lg">Quand ça marche, ça se partage !</p>
              </div>

              <div className="bg-purple-700 rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">En toute autonomie</h3>
                <p className="text-lg">Une approche brute pour aller à l'essentiel, à votre rythme.</p>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-4">
                <Target className="inline w-10 h-10" /> QUI EST CONCERNÉ ? <Target className="inline w-10 h-10" />
              </h3>
              <p className="text-xl mb-6">
                Que vous soyez étudiant, en reconversion ou simplement porté par un rêve, cette formation est faite pour vous.
              </p>
              <p className="text-2xl font-bold mb-2">
                <Trophy className="inline w-8 h-8" /> Simple, clair, et 100 % action ! <Trophy className="inline w-8 h-8" />
              </p>
              <p className="text-2xl font-bold mb-6">
                <Flame className="inline w-8 h-8" /> Tarif unique : seulement 299€ ! <Flame className="inline w-8 h-8" />
              </p>
              <button 
                onClick={() => document.getElementById('formulaire').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white text-xl font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                👉 OUI ! JE VEUX LA FORMATION
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('formulaire').scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 hover:bg-purple-700 text-white text-2xl font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105"
            >
              👉 OUI ! JE VEUX LA FORMATION
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white text-3xl font-bold mb-4">ANTA2L</div>
          <div className="text-white mb-2">
            <a href="https://www.instagram.com/kevin_a2ta2l/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              @kevin_a2ta2l
            </a>
          </div>
          <div className="text-white text-sm mb-2">TOUS DROITS RÉSERVÉS</div>
          <div className="text-white text-sm">
            <a href="#" className="hover:text-purple-400">CONDITIONS GÉNÉRALES</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormationPage;