

    // console.log("Le script.js est bien chargé !");

    // $(document).ready(function() {


    //     // Validation des champs
    //     function validateForm() {
    //         let isValid = true;

    //         // Validation des informations personnelles
    //         const nom = $('#nom').val();
    //         const age = $('#age').val();
    //         const email = $('#email').val();
    //         const telephone = $('#telephone').val();

    //         if (!nom) {
    //             $('#error-personnel').text('Veuillez remplir le nom complet.').removeClass('hidden');
    //             isValid = false;
    //         } else if (age < 18 || age > 65) {
    //             $('#error-personnel').text('L\'âge doit être compris entre 18 et 65 ans.').removeClass('hidden');
    //             isValid = false;
    //         } else if (!validateEmail(email)) {
    //             $('#error-personnel').text('Veuillez entrer une adresse email valide.').removeClass('hidden');
    //             isValid = false;
    //         } else if (!validatePhone(telephone)) {
    //             $('#error-personnel').text('Veuillez entrer un numéro de téléphone valide.').removeClass('hidden');
    //             isValid = false;
    //         } else {
    //             $('#error-personnel').addClass('hidden');
    //         }

    //         // Validation des expériences professionnelles
    //         const experiences = $('#experiences input, #experiences textarea');
    //         if (experiences.length === 0) {
    //             $('#error-experiences').text('Veuillez remplir au moins une expérience.').removeClass('hidden');
    //             isValid = false;
    //         } else {
    //             $('#error-experiences').addClass('hidden');
    //         }

    //         // Validation des formations
    //         const formations = $('#formations input');
    //         if (formations.length === 0) {
    //             $('#error-formations').text('Veuillez remplir au moins une formation.').removeClass('hidden');
    //             isValid = false;
    //         } else {
    //             $('#error-formations').addClass('hidden');
    //         }

    //         // Validation des compétences
    //         const competences = $('#competencesList input');
    //         if (competences.length === 0) {
    //             $('#error-competences').text('Veuillez renseigner au moins une compétence.').removeClass('hidden');
    //             isValid = false;
    //         } else {
    //             $('#error-competences').addClass('hidden');
    //         }

    //         // Validation des langues
    //         const langues = $('#languesList input');
    //         if (langues.length === 0) {
    //             $('#error-langues').text('Veuillez renseigner au moins une langue.').removeClass('hidden');
    //             isValid = false;
    //         } else {
    //             $('#error-langues').addClass('hidden');
    //         }

    //         // Validation des références
    //         const references = $('#referencesList input');
    //         if (references.length === 0) {
    //             $('#error-references').text('Veuillez renseigner au moins une référence.').removeClass('hidden');
    //             isValid = false;
    //         } else {
    //             $('#error-references').addClass('hidden');
    //         }

    //         return isValid;
    //     }

    //     // Fonction pour valider l'email
    //     function validateEmail(email) {
    //         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //         return re.test(String(email).toLowerCase());
    //     }

    //     // Fonction pour valider le téléphone
    //     function validatePhone(phone) {
    //         //const re = /^[0-9]{10}$/;
    //         const re = /^[0-9]{9}$/;
    //         return re.test(String(phone));
    //     }

    //     // Sauvegarde des données dans le localStorage
    //     $('#sauvegarder').click(function() {
    //         if (validateForm()) {
    //             const formData = {
    //                 nom: $('#nom').val(),
    //                 age: $('#age').val(),
    //                 sexe: $('#sexe').val(),
    //                 titre: $('#titre').val(),
    //                 situation: $('#situation').val(),
    //                 description: $('#description').val(),
    //                 email: $('#email').val(),
    //                 telephone: $('#telephone').val(),
    //                 adresse: $('#adresse').val(),
    //                 photo: $('#photo').val(),
    //                 experiences: [],
    //                 formations: [],
    //                 competences: [],
    //                 langues: [],
    //                 references: []
    //             };

    //             $('#experiences .experience').each(function() {
    //                 formData.experiences.push({
    //                     entreprise: $(this).find('input').eq(0).val(),
    //                     poste: $(this).find('input').eq(1).val(),
    //                     duree: $(this).find('input').eq(2).val(),
    //                     description: $(this).find('textarea').val()
    //                 });
    //             });

    //             $('#formations .formation').each(function() {
    //                 formData.formations.push({
    //                     diplome: $(this).find('input').eq(0).val(),
    //                     etablissement: $(this).find('input').eq(1).val(),
    //                     annee: $(this).find('input').eq(2).val()
    //                 });
    //             });

    //             $('#competencesList .competence').each(function() {
    //                 formData.competences.push($(this).find('input').val());
    //             });

    //             $('#languesList .langue').each(function() {
    //                 formData.langues.push($(this).find('input').val());
    //             });

    //             $('#referencesList .reference').each(function() {
    //                 formData.references.push({
    //                     nom: $(this).find('input').eq(0).val(),
    //                     poste: $(this).find('input').eq(1).val(),
    //                     contact: $(this).find('input').eq(2).val()
    //                 });
    //             });

    //             localStorage.setItem('cvData', JSON.stringify(formData));
    //             alert('Données sauvegardées avec succès !');
    //         }
    //     });
            
    // //function previewPDF(){
    
    //     // Récupération des données du localStorage
    //     function loadData() {
    //         const savedData = localStorage.getItem('cvData');
    //         if (savedData) {
    //             const formData = JSON.parse(savedData);

    //             $('#nom').val(formData.nom);
    //             $('#age').val(formData.age);
    //             $('#sexe').val(formData.sexe);
    //             $('#titre').val(formData.titre);
    //             $('#situation').val(formData.situation);
    //             $('#description').val(formData.description);
    //             $('#email').val(formData.email);
    //             $('#telephone').val(formData.telephone);
    //             $('#adresse').val(formData.adresse);
    //             $('#photo').val(formData.photo);

    //             formData.experiences.forEach(exp => {
    //                 addExperience(exp.entreprise, exp.poste, exp.duree, exp.description);
    //             });

    //             formData.formations.forEach(form => {
    //                 addFormation(form.diplome, form.etablissement, form.annee);
    //             });

    //             formData.competences.forEach(comp => {
    //                 addCompetence(comp);
    //             });

    //             formData.langues.forEach(lang => {
    //                 addLangue(lang);
    //             });

    //             formData.references.forEach(ref => {
    //                 addReference(ref.nom, ref.poste, ref.contact);
    //             });

    //             updatePreview();
    //         }
    //     }

    //     // Chargement des données au chargement de la page
    //     loadData();
    // });
    // function updatePreview() {
    //     // Mise à jour des informations personnelles
    //     $('#nomPreview').text($('#nom').val());
    //     $('#nomPreview2').text($('#nom').val());
    //     $('#titrePreview').text($('#titre').val());
    //     $('#titrePreview2').text($('#titre').val());
    //     $('#descriptionPreview').text($('#description').val());
    //     $('#telephonePreview').text(`📞 ${$('#telephone').val()}`);
    //     $('#emailPreview').text(`✉ ${$('#email').val()}`);
    //     $('#adressePreview').text(`📍 ${$('#adresse').val()}`);

    //     // Mise à jour de la photo
    //     const photoFile = $('#photo')[0].files[0];
    //     if (photoFile) {
    //         const reader = new FileReader();
    //         reader.onload = function(e) {
    //             $('#photoPreview').attr('src', e.target.result);
    //         };
    //         reader.readAsDataURL(photoFile);
    //     }

    //     // Mise à jour des expériences professionnelles
    //     $('#experiencesPreview').empty();
    //     $('#experiences .experience').each(function() {
    //         const entreprise = $(this).find('input').eq(0).val();
    //         const poste = $(this).find('input').eq(1).val();
    //         const duree = $(this).find('input').eq(2).val();
    //         const description = $(this).find('textarea').val();

    //         $('#experiencesPreview').append(`
    //             <div class="mb-4">
    //                 <h4 class="text-xl font-bold">${poste}</h4>
    //                 <p class="text-gray-700">${entreprise} | ${duree}</p>
    //                 <p class="text-gray-600">${description}</p>
    //             </div>
    //         `);
    //     });

    //     // Mise à jour des formations
    //     $('#formationPreview').empty();
    //     $('#formations .formation').each(function() {
    //         const diplome = $(this).find('input').eq(0).val();
    //         const etablissement = $(this).find('input').eq(1).val();
    //         const annee = $(this).find('input').eq(2).val();

    //         $('#formationPreview').append(`
    //             <div class="mb-4">
    //                 <h4 class="text-xl font-bold">${diplome}</h4>
    //                 <p class="text-gray-700">${etablissement} | ${annee}</p>
    //             </div>
    //         `);
    //     });

    //     // Mise à jour des compétences
    //     $('#competencesPreview').empty();
    //     $('#competencesList .competence').each(function() {
    //         const competence = $(this).find('input').val();
    //         $('#competencesPreview').append(`<li>${competence}</li>`);
    //     });

    //     // Mise à jour des langues
    //     $('#languesPreview').empty();
    //     $('#languesList .langue').each(function() {
    //         const langue = $(this).find('input').val();
    //         $('#languesPreview').append(`<li>${langue}</li>`);
    //     });

    //     // Mise à jour des références
    //     $('#referencesPreview').empty();
    //     $('#referencesList .reference').each(function() {
    //         const nom = $(this).find('input').eq(0).val();
    //         const poste = $(this).find('input').eq(1).val();
    //         const contact = $(this).find('input').eq(2).val();

    //         $('#referencesPreview').append(`
    //             <div class="mb-4">
    //                 <h4 class="text-xl font-bold">${nom}</h4>
    //                 <p class="text-gray-700">${poste}</p>
    //                 <p class="text-gray-600">${contact}</p>
    //             </div>
    //         `);
    //     });
    // }

    // // Mise à jour de la prévisualisation en temps réel
    // $('input, textarea, select').on('input', function() {
    //     updatePreview();
    // });

    // // Ajout d'une expérience
    // $('#ajouterExperience').click(function() {
    //     $('#experiences').append(`
    //         <div class="experience mb-4">
    //             <input type="text" placeholder="Nom de l'entreprise" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //             <input type="text" placeholder="Poste occupé" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //             <input type="text" placeholder="Durée (ex: Janvier 20xx - Mars 20xx)" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //             <textarea placeholder="Description des missions" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white"></textarea>
    //         </div>
    //     `);
    //     updatePreview();
    // });

    // // Ajout d'une formation
    // $('#ajouterFormation').click(function() {
    //     $('#formations').append(`
    //         <div class="formation mb-4">
    //             <input type="text" placeholder="Diplôme" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //             <input type="text" placeholder="Établissement" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //             <input type="text" placeholder="Année d'obtention" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //         </div>
    //     `);
    //     updatePreview();
    // });

    // // Ajout d'une compétence
    // $('#ajouterCompetence').click(function() {
    //     $('#competencesList').append(`
    //         <div class="competence mb-4">
    //             <input type="text" placeholder="Compétence" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //         </div>
    //     `);
    //     updatePreview();
    // });

    // // Ajout d'une langue
    // $('#ajouterLangue').click(function() {
    //     $('#languesList').append(`
    //         <div class="langue mb-4">
    //             <input type="text" placeholder="Langue" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //         </div>
    //     `);
    //     updatePreview();
    // });

    // // Ajout d'une référence
    // $('#ajouterReference').click(function() {
    //     $('#referencesList').append(`
    //         <div class="reference mb-4">
    //             <input type="text" placeholder="Nom" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //             <input type="text" placeholder="Poste" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //             <input type="text" placeholder="Contact" class="w-full p-2 mb-2 border rounded bg-gray-700 text-white">
    //         </div>
    //     `);
    //     updatePreview();
    // });
    // // // Génération du CV en PDF
    // // $('#telechargerPDF').click(function() {
    // //     const element = document.getElementById('#cvPreview');
    // //     html2pdf().from(element).save();
    // // });

    // // Génération du CV en Word (DOCX)
    // $('#telechargerWord').click(function() {
    //     const element = document.getElementById('cvPreview');
    //     const doc = new jsPDF();
    //     doc.fromHTML(element, 15, 15, {
    //         'width': 170
    //     }, function() {
    //         doc.save('cv.docx');
    //     });
    // });

    // // Générer le PDF
    // $('#telechargerPDF').click(function() {
    //                 const element = document.getElementById('cvPreview');
    //                 const options = {
    //                     margin: 10,
    //                     filename: 'mon_cv.pdf',
    //                     image: { type: 'jpeg', quality: 0.98 },
    //                     html2canvas: { scale: 2 },
    //                     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    //                 };
    //                 html2pdf().from(element).set(options).save();
    //             });
    

    // // Génération du CV en image (PNG)
    // $('#telechargerImage').click(function() {
    //     const element = document.getElementById('cvPreview');
    //     html2canvas(element).then(canvas => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const link = document.createElement('a');
    //         link.href = imgData;
    //         link.download = 'cv.png';
    //         link.click();
    //     });
    // });
    //             anime({
    //                 targets: '#cvPreview',
    //                 opacity: [0, 1],
    //                 translateY: [20, 0],
    //                 duration: 500,
    //                 easing: 'easeOutExpo',
    //                 delay: 100
    //             });

    //             anime({
    //                 targets: 'input, textarea, select, button',
    //                 opacity: [0, 1],
    //                 translateY: [10, 0],
    //                 duration: 800,
    //                 easing: 'easeOutExpo',
    //                 delay: anime.stagger(100)
    //             });

    //             anime({
    //     targets: '.section',
    //     opacity: [0, 1],
    //     translateY: [20, 0],
    //     duration: 800,
    //     delay: anime.stagger(200),
    //     easing: 'easeOutExpo'
    // });
    // document.querySelectorAll('button').forEach(button => {
    //     button.addEventListener('mouseenter', () => {
    //         anime({
    //             targets: button,
    //             scale: [1, 1.1],
    //             duration: 300,
    //             easing: 'easeOutExpo'
    //         });
    //     });
    //     button.addEventListener('mouseleave', () => {
    //         anime({
    //             targets: button,
    //             scale: [1.1, 1],
    //             duration: 300,
    //             easing: 'easeOutExpo'
    //         });
    //     });
    // });

    //     // Animation avec Anime.js
    //     anime({
    //         targets: '#cvPreview',
    //         opacity: [0, 1],
    //         translateY: [20, 0],
    //         duration: 1000,
    //         easing: 'easeOutExpo',
    //         delay: 500
    //     });



    $(document).ready(function() {
        // Validation des champs
        function validateForm() {
            let isValid = true;

            // Validation des informations personnelles
            const nom = $('#nom').val();
            const age = $('#age').val();
            const email = $('#email').val();
            const telephone = $('#telephone').val();

            if (!nom) {
                $('#error-personnel').text('Veuillez remplir le nom complet.').removeClass('hidden');
                isValid = false;
            } else if (age < 18 || age > 65) {
                $('#error-personnel').text('L\'âge doit être compris entre 18 et 65 ans.').removeClass('hidden');
                isValid = false;
            } else if (!validateEmail(email)) {
                $('#error-personnel').text('Veuillez entrer une adresse email valide.').removeClass('hidden');
                isValid = false;
            } else if (!validatePhone(telephone)) {
                $('#error-personnel').text('Veuillez entrer un numéro de téléphone valide.').removeClass('hidden');
                isValid = false;
            } else {
                $('#error-personnel').addClass('hidden');
            }

            //valid expeirence
            let experiencesValid = true;
            $('#experiences .experience').each(function () {
                const duree = $(this).find('input[placeholder*="Durée"]').val();
                if (!validateDate(duree)) {
                    experiencesValid = false;
                    $(this).find('input[placeholder*="Durée"]').addClass('border-red-500');
                    $('#error-experiences').text('Format de date invalide (ex: janvier 20xx - mars 20xx)').removeClass('hidden');
                }
            });
            if (!experiencesValid) {
                isValid = false;
            } else {
                $('#error-experiences').addClass('hidden');
            }
        

            // Validation des formations
            
            let formationsValid = true;
            $('#formations .formation').each(function () {
                const duree = $(this).find('input[placeholder*="Durée"]').val();
                if (!validateDate(duree)) {
                    formationsValid = false;
                    $(this).find('input[placeholder*="Durée"]').addClass('border-red-500');
                    $('#error-formations').text('Format de date invalide (ex: janvier 20xx - mars 20xx)').removeClass('hidden');
                }
            });
            if (!formationsValid) {
                isValid = false;
            } else {
                $('#error-formations').addClass('hidden');
            }

            // Validation des compétences
            const competences = $('#competencesList input');
            if (competences.length === 0) {
                $('#error-competences').text('Veuillez renseigner au moins une compétence.').removeClass('hidden');
                isValid = false;
            } else {
                $('#error-competences').addClass('hidden');
            }

            // Validation des langues
            const langues = $('#languesList input');
            if (langues.length === 0) {
                $('#error-langues').text('Veuillez renseigner au moins une langue.').removeClass('hidden');
                isValid = false;
            } else {
                $('#error-langues').addClass('hidden');
            }

            // Validation des références
            const references = $('#referencesList input');
            if (references.length === 0) {
                $('#error-references').text('Veuillez renseigner au moins une référence.').removeClass('hidden');
                isValid = false;
            } else {
                $('#error-references').addClass('hidden');
            }

            return isValid;
        }


        $(document).ready(function () {
            // Valider les dates d'expérience
            $('#experiences').on('input', 'input[placeholder*="Durée"]', function () {
                const dateValue = $(this).val();
                if (!validateDate(dateValue)) {
                    $(this).addClass('border-red-500'); // Ajoute une bordure rouge en cas d'erreur
                    $('#error-experiences').text('Format de date invalide (ex: janvier 20xx - mars 20xx)').removeClass('hidden');
                } else {
                    $(this).removeClass('border-red-500'); // Supprime la bordure rouge si la date est valide
                    $('#error-experiences').addClass('hidden');
                }
            });
        
            // Valider les dates de formation
            $('#formations').on('input', 'input[placeholder*="Durée"]', function () {
                const dateValue = $(this).val();
                if (!validateDate(dateValue)) {
                    $(this).addClass('border-red-500'); // Ajoute une bordure rouge en cas d'erreur
                    $('#error-formations').text('Format de date invalide (ex: janvier 20xx - mars 20xx)').removeClass('hidden');
                } else {
                    $(this).removeClass('border-red-500'); // Supprime la bordure rouge si la date est valide
                    $('#error-formations').addClass('hidden');
                }
            });
        });
        // Fonction pour valider l'email
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        // date
    function validateDate(dateString) {
        const regex = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s\d{4}\s-\s(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s\d{4}$/i;
        return regex.test(dateString);
    }

        // Fonction pour valider le téléphone
        function validatePhone(phone) {
            //const re = /^[0-9]{10}$/;
            const re = /^[0-9]{9}$/;
            return re.test(String(phone));
        }

        // Sauvegarde des données dans le localStorage
        $('#sauvegarder').click(function() {
            if (validateForm()) {
                const formData = {
                    nom: $('#nom').val(),
                    age: $('#age').val(),
                    sexe: $('#sexe').val(),
                    titre: $('#titre').val(),
                    situation: $('#situation').val(),
                    description: $('#description').val(),
                    email: $('#email').val(),
                    telephone: $('#telephone').val(),
                    adresse: $('#adresse').val(),
                    photo: $('#photo').val(),
                    experiences: [],
                    formations: [],
                    competences: [],
                    langues: [],
                    references: []
                };

                $('#experiences .experience').each(function() {
                    formData.experiences.push({
                        entreprise: $(this).find('input').eq(0).val(),
                        poste: $(this).find('input').eq(1).val(),
                        duree: $(this).find('input').eq(2).val(),
                        description: $(this).find('textarea').val()
                    });
                });

                $('#formations .formation').each(function() {
                    formData.formations.push({
                        diplome: $(this).find('input').eq(0).val(),
                        etablissement: $(this).find('input').eq(1).val(),
                        annee: $(this).find('input').eq(2).val()
                    });
                });

                $('#competencesList .competence').each(function() {
                    formData.competences.push($(this).find('input').val());
                });

                $('#languesList .langue').each(function() {
                    formData.langues.push($(this).find('input').val());
                });

                $('#referencesList .reference').each(function() {
                    formData.references.push({
                        nom: $(this).find('input').eq(0).val(),
                        poste: $(this).find('input').eq(1).val(),
                        contact: $(this).find('input').eq(2).val()
                    });
                });

                localStorage.setItem('cvData', JSON.stringify(formData));
                alert('Données sauvegardées avec succès !');
            }
        });

        // Récupération des données du localStorage
        function loadData() {
            const savedData = localStorage.getItem('cvData');
            if (savedData) {
                const formData = JSON.parse(savedData);

                $('#nom').val(formData.nom);
                $('#age').val(formData.age);
                $('#sexe').val(formData.sexe);
                $('#titre').val(formData.titre);
                $('#situation').val(formData.situation);
                $('#description').val(formData.description);
                $('#email').val(formData.email);
                $('#telephone').val(formData.telephone);
                $('#adresse').val(formData.adresse);
                $('#photo').val(formData.photo);

                formData.experiences.forEach(exp => {
                    addExperience(exp.entreprise, exp.poste, exp.duree, exp.description);
                });

                formData.formations.forEach(form => {
                    addFormation(form.diplome, form.etablissement, form.annee);
                });

                formData.competences.forEach(comp => {
                    addCompetence(comp);
                });

                formData.langues.forEach(lang => {
                    addLangue(lang);
                });

                formData.references.forEach(ref => {
                    addReference(ref.nom, ref.poste, ref.contact);
                });

                updatePreview();
            }
        }

        // Chargement des données au chargement de la page
        loadData();
    });
    function updatePreview() {
        
        // Mise à jour des informations personnelles avec des icônes
        $('#nomPreview').html(` ${$('#nom').val()}`);
        $('#agePreview').html(` ${$('#age').val()} ans`);
        $('#sexePreview').html(` ${$('#sexe').val()}`);
        $('#nomPreview2').html(` ${$('#nom').val()}`);
        $('#titrePreview').html(` ${$('#titre').val()}`);
        $('#titrePreview2').html(` ${$('#titre').val()}`);
        $('#descriptionPreview').html(`<i class="fas fa-info-circle"></i> ${$('#description').val()}`);
        $('#telephonePreview').html(`<i class="fas fa-phone"></i> ${$('#telephone').val()}`);
        $('#emailPreview').html(`<i class="fas fa-envelope"></i> ${$('#email').val()}`);
        $('#adressePreview').html(`<i class="fas fa-map-marker-alt"></i> ${$('#adresse').val()}`);

        // Mise à jour de la photo
        const photoFile = $('#photo')[0].files[0];
        if (photoFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $('#photoPreview').attr('src', e.target.result);
            };
            reader.readAsDataURL(photoFile);
        }

        // Mise à jour des expériences professionnelles
        $('#experiencesPreview').empty();
        $('#experiences .experience').each(function() {
            const entreprise = $(this).find('input').eq(0).val();
            const poste = $(this).find('input').eq(1).val();
            const duree = $(this).find('input').eq(2).val();
            const description = $(this).find('textarea').val();

            $('#experiencesPreview').append(`
                <div class="mb-4">
                    <h4 class="text-xl font-bold">${poste}</h4>
                    <p class="text-gray-700">${entreprise} | ${duree}</p>
                    <p class="text-gray-600">${description}</p>
                </div>
            `);
        });

        // Mise à jour des formations
        $('#formationPreview').empty();
        $('#formations .formation').each(function() {
            const diplome = $(this).find('input').eq(0).val();
            const etablissement = $(this).find('input').eq(1).val();
            const annee = $(this).find('input').eq(2).val();

            $('#formationPreview').append(`
                <div class="mb-4">
                    <h4 class="text-xl font-bold">${diplome}</h4>
                    <p class="text-gray-700">${etablissement} | ${annee}</p>
                </div>
            `);
        });

        // Mise à jour des compétences
        $('#competencesPreview').empty();
        $('#competencesList .competence').each(function() {
            const competence = $(this).find('input').val();
            $('#competencesPreview').append(`<li>${competence}</li>`);
        });

        // Mise à jour des langues
        $('#languesPreview').empty();
        $('#languesList .langue').each(function() {
            const langue = $(this).find('input').val();
            $('#languesPreview').append(`<li>${langue}</li>`);
        });

        // Mise à jour des références
        $('#referencesPreview').empty();
        $('#referencesList .reference').each(function() {
            const nom = $(this).find('input').eq(0).val();
            const poste = $(this).find('input').eq(1).val();
            const contact = $(this).find('input').eq(2).val();

            $('#referencesPreview').append(`
                <div class="mb-4">
                    <h4 class="text-xl font-bold">${nom}</h4>
                    <p class="text-gray-700">${poste}</p>
                    <p class="text-gray-600">${contact}</p>
                </div>
            `);
        });
    }

    // Mise à jour de la prévisualisation en temps réel
    $('input, textarea, select').on('input', function() {
        updatePreview();
    });

    // Ajout d'une expérience
    $('#ajouterExperience').click(function() {
        $('#experiences').append(`
            <div class="experience mb-4">
                <input type="text" placeholder="Nom de l'entreprise" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
                <input type="text" placeholder="Poste occupé" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
                <input type="text" placeholder="Durée (ex: Janvier 20xx - Mars 20xx)" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
                <textarea placeholder="Description des missions" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white"></textarea>
            </div>
        `);
        updatePreview();
    });

    // Ajout d'une formation
    $('#ajouterFormation').click(function() {
        $('#formations').append(`
            <div class="formation mb-4">
                <input type="text" placeholder="Diplôme" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
                <input type="text" placeholder="Établissement" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
                <input type="text" placeholder="Année d'obtention" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
            </div>
        `);
        updatePreview();
    });

    // Ajout d'une compétence
    $('#ajouterCompetence').click(function() {
        $('#competencesList').append(`
            <div class="competence mb-4">
                <input type="text" placeholder="Compétence" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
            </div>
        `);
        updatePreview();
    });

    // Ajout d'une langue
    $('#ajouterLangue').click(function() {
        $('#languesList').append(`
            <div class="langue mb-4">
                <input type="text" placeholder="Langue" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
            </div>
        `);
        updatePreview();
    });

    // Ajout d'une référence
    $('#ajouterReference').click(function() {
        $('#referencesList').append(`
            <div class="reference mb-4">
                <input type="text" placeholder="Nom" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
                <input type="text" placeholder="Poste" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
                <input type="text" placeholder="Contact" class="w-full p-2 mb-2 border rounded bg-gray-900 text-white">
            </div>
        `);
        updatePreview();
    });
    // Télécharger le CV en PDF
    $('#telechargerPDF').click(function () {
        // Sélectionner la section à convertir en PDF
        const element = document.getElementById('#cvPreview');
        //const $element = $('cvPreview');
                        const options = {
                            margin: 10,
                            filename: 'mon_cv.pdf',
                            image: { type: 'jpeg', quality: 0.98 },
                            html2canvas: { scale: 4 , useCORS: true },
                            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                        };
                        html2pdf().set(options).from(element[0]).outputPDF('bloburl').then( (pdfUrl ) => {
                        window.open(pdfUrl, '_blank');
                        
                console.log('PDF généré avec succès !');
        })       .catch((err) => {
            console.error('Erreur lors de la génération du PDF :', err);
    //       });
                        });
                    });
    //     // Options pour html2pdf
    //     const options = {
    //         margin: [10, 10, 10, 10], // Marges (haut, droite, bas, gauche)
    //         filename: 'CV.pdf', // Nom du fichier PDF
    //         image: { type: 'jpeg', quality: 0.98 }, // Qualité de l'image
    //         html2canvas: { scale: 4, useCORS: true }, // Options pour html2canvas
    //         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // Format du PDF
    //     };

    //     // Générer le PDF
    //     html2pdf()
    //         .from(element)
    //         .set(options)
    //         .save()
    //         .then(() => {
    //             console.log('PDF généré avec succès !');
    //         })
    //         .catch((err) => {
    //             console.error('Erreur lors de la génération du PDF :', err);
    //         });
    // });

    //ANIMATIOND
                anime({
                    targets: '#cvPreview',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 500,
                    easing: 'easeOutExpo',
                    delay: 100
                });

                anime({
                    targets: 'input, textarea, select, button',
                    opacity: [0, 1],
                    translateY: [10, 0],
                    duration: 800,
                    easing: 'easeOutExpo',
                    delay: anime.stagger(100)
                });

                anime({
        targets: '.section',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'easeOutExpo'
    });
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: [1, 1.1],
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: [1.1, 1],
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
    });

        // Animation avec Anime.js
        anime({
            targets: '#cvPreview',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 500
        });
