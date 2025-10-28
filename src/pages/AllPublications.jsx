
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './AllPublications.css';


const allPublications = [
  {
    title: "Cancer detection via one-shot learning:integrating gene expression and genomic mutation analysis",
    year: 2025,
    authors: "Petescia, Alessia; Benevento, Gerardo; Falanga, Anna; Macaro, Alessandro; Malandrino, Delfina; Montefusco, Alberto; Sorrentino, Rosalinda; Zaccagnino, Rocco",
    url: "https://hdl.handle.net/11386/4920232",
    doi: "10.1186/s12859-025-06257-3"
  },
  {
    title: "Conventional Chemotherapy and Inflammation: What Is the Role of the Inflammasome in the Tumor Microenvironment?",
    year: 2025,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Di Caprio, Simone; Falanga, Anna; D'Andria, Emmanuel; D'Emanuele Di Villa Bianca, Roberta; Sorrentino, Rosalinda",
    url: "https://hdl.handle.net/11386/4919535",
    doi: "10.3390/biomedicines13010203"
  },
  {
    title: "Role of the AIM2 Inflammasome in Cancer: Potential Therapeutic Strategies",
    year: 2025,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Di Caprio, Simone; Falanga, Anna; D'Andria, Emmanuel; D'Emanuele Di Villa Bianca, Roberta; Sorrentino, Rosalinda",
    url: "https://hdl.handle.net/11386/4919536",
    doi: "10.3390/biomedicines13020395"
  },
  {
    title: "ATP-induced fibrogenic pathway in circulating cells obtained by idiopathic pulmonary fibrotic (IPF) patients is not blocked by nintedanib and pirfenidone",
    year: 2024,
    authors: "Colarusso, Chiara; Falanga, Anna; DI CAPRIO, Simone; Terlizzi, Michela; D'Andria, Emmanuel; Molino, Antonio; Maiolino, Piera; Sorrentino, Rosalinda",
    url: "https://hdl.handle.net/11386/4870071",
    doi: "10.1016/j.biopha.2024.116896"
  },
  {
    title: "Editorial: Targeting regulatory cells in cancer: old and new approaches in immunotherapy",
    year: 2024,
    authors: "Cari, Luigi; Sorrentino, Rosalinda; Akkaya, Billur; Nocentini, Giuseppe",
    url: "https://hdl.handle.net/11386/4890936",
    doi: "10.3389/fimmu.2024.1458280"
  },
  {
    title: "Sphingosine-1-Phosphate Shapes Healthy Monocytes into An Immunosuppressive Phenotype",
    year: 2024,
    authors: "Terlizzi, M.; Falanga, A.; Colarusso, C.; Pinto, A.; Sorrentino, R.",
    url: "https://hdl.handle.net/11386/4867653",
    doi: "10.33594/000000691"
  },
  {
    title: "The activation of the AIM2 inflammasome after cigarette smoke exposure leads to an immunosuppressive lung microenvironment.",
    year: 2024,
    authors: "Colarusso, Chiara; Falanga, Anna; Di Caprio, Simone; Terlizzi, Michela; Pinto, Aldo; Maiolino, Piera; Sorrentino, Rosalinda.",
    url: "https://hdl.handle.net/11386/4860795",
    doi: "10.1016/j.intimp.2024.111832"
  },
  {
    title: "Absent in melanoma 2 (AIM2) positive profile identifies a poor prognosis of lung adenocarcinoma patients",
    year: 2023,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Falanga, Anna; Stathopoulos, Georgious; De Lucia, Luigi; Hansbro Phillip, M; Pinto, Aldo; Sorrentino, Rosalinda.",
    url: "https://hdl.handle.net/11386/4851717",
    doi: "10.1016/j.intimp.2023.110990"
  },
  {
    title: "High levels of PD-L1 on platelets of NSCLC patients contributes to the pharmacological activity of Atezolizumab",
    year: 2023,
    authors: "Colarusso, C.; Falanga, A.; Terlizzi, M.; De Rosa, I.; Somma, P.; Sommella, E. M.; Caponigro, V.; Panico, L.; Salviati, E.; Campiglia, P.; Salatiello, G.; Tramontano, T.; Maiolino, P.; Pinto, A.; Sorrentino, R.",
    url: "https://hdl.handle.net/11386/4851716",
    doi: "10.1016/j.biopha.2023.115709"
  },
  {
    title: "Induction of Inflammation Disrupts the Negative Interplay between STING and S1P Axis That Is Observed during Physiological Conditions in the Lung",
    year: 2023,
    authors: "Terlizzi, Michela; Colarusso, Chiara; Falanga, Anna; Somma, Pasquale; DE ROSA, Ilaria; Panico, Luigi; Pinto, Aldo; Maiolino, Piera; Sorrentino, Rosalinda",
    url: "https://hdl.handle.net/11386/4850614",
    doi: "10.3390/ijms24098303"
  },
  {
    title: "Sex Differences in Sphingosine-1-Phosphate Levels Are Dependent on Ceramide Synthase 1 and Ceramidase in Lung Physiology and Tumor Conditions",
    year: 2023,
    authors: "Terlizzi, Michela; Colarusso, Chiara; Ferraro, Giusy; Falanga, Anna; Monti, Maria Chiara; Somma, Pasquale; De Rosa, Ilaria; Panico, Luigi; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "https://hdl.handle.net/11386/4850613",
    doi: "10.3390/ijms241310841"
  },
  {
    title: "A vitamin E long-chain metabolite and the inspired drug candidate α-amplexichromanol relieve asthma features in an experimental model of allergen sensitization",
    year: 2022,
    authors: "Cerqua, Ida; Neukirch, Konstantin; Terlizzi, Michela; Granato, Elisabetta; Caiazzo, Elisabetta; Cicala, Carla; Ialenti, Armando; Capasso, Raffaele; Werz, Oliver; Sorrentino, Rosalinda; Seraphin, Denis; Helesbeux, Jean-Jacques; Cirino, Giuseppe; Koeberle, Andreas; Roviezzo, Fiorentina; Rossi, Antonietta",
    url: "http://hdl.handle.net/11386/4800653",
    doi: "10.1016/j.phrs.2022.106250"
  },
  {
    title: "Activation of the AIM2 Receptor in Circulating Cells of Post-COVID-19 Patients With Signs of Lung Fibrosis Is Associated With the Release of IL-1α, IFN-α and TGF-β",
    year: 2022,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Maglio, Angelantonio; Molino, Antonio; Candia, Claudio; Vitale, Carolina; M Hansbro, Philip; Vatrella, Alessandro; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4800631",
    doi: "10.3389/fimmu.2022.934264"
  },
  {
    title: "Post-COVID-19 patients develop lung fibrotic-like changes: is there a role for IL-1α and TGF-ß?",
    year: 2022,
    authors: "Candia, C.; Colarusso, C.; Molino, A.; Terlizzi, M.; Saglia, A.; Sferra, E.; Coppola, M.; Gallotti, L.; Vatrella, A.; Pinto, A.; Sorrentino, R.",
    url: "https://hdl.handle.net/11386/4854468",
    doi: "10.1183/13993003.congress-2022.2740"
  },
  {
    title: "S1P-Induced TNF-α and IL-6 Release from PBMCs Exacerbates Lung Cancer-Associated Inflammation",
    year: 2022,
    authors: "Terlizzi, M.; Colarusso, C.; Somma, P.; De Rosa, I.; Panico, L.; Pinto, A.; Sorrentino, R.",
    url: "http://hdl.handle.net/11386/4802512",
    doi: "10.3390/cells11162524"
  },
  {
    title: "Caspase-11 and AIM2 inflammasome are involved in smoking-induced COPD and lung adenocarcinoma",
    year: 2021,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Lamort, Anne-Sophie; Cerqua, Ida; Roviezzo, Fiorentina; Stathopoulos, Georgios; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4767511",
    doi: "10.18632/oncotarget.27964"
  },
  {
    title: "Immune modulation of cancer: mechanisms and resistance",
    year: 2021,
    authors: "Lisi, Lucia; Cari, Luigi; Sorrentino, Rosalinda; Mini, Enrico; Fimognari, Carmela; Nocentini, Giuseppe",
    url: "http://hdl.handle.net/11386/4800651",
    doi: "10.36118/pharmadvances.2021.07"
  },
  {
    title: "Intracellular sphingosine-1-phosphate receptor 3 contributes to lung tumor cell proliferation",
    year: 2021,
    authors: "Terlizzi, M; Colarusso, C; Ferraro, G; Monti, Mc; Rosa, I; Somma, P; Salvi, R; Pinto, A; Sorrentino, R.",
    url: "http://hdl.handle.net/11386/4772356",
    doi: "10.33594/000000431"
  },
  {
    title: "Post-COVID-19 Patients Who Develop Lung Fibrotic-like Changes Have Lower Circulating Levels of IFN-β but Higher Levels of IL-1α and TGF-β",
    year: 2021,
    authors: "Colarusso, Chiara; Maglio, Angelantonio; Terlizzi, Michela; Vitale, Carolina; Molino, Antonio; Pinto, Aldo; Vatrella, Alessandro; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4774383",
    doi: "10.3390/biomedicines9121931"
  },
  {
    title: "Sphingosine-1-phosphate contributes to TLR9-induced TNF-α release in lung tumor cells",
    year: 2021,
    authors: "Terlizzi, M.; Colarusso, C.; Ferraro, G.; Monti, M. C.; Cerqua, I.; Roviezzo, F.; Pinto, A.; Sorrentino, R.",
    url: "http://hdl.handle.net/11386/4765842",
    doi: "10.33594/000000361"
  },
  {
    title: "Sphingosine-1-phosphate/TGF-β axis drives epithelial mesenchymal transition in asthma-like disease",
    year: 2021,
    authors: "Riemma, Maria A.; Cerqua, Ida; Romano, Barbara; Irollo, Elena; Bertolino, Antonio; Camerlingo, Rosa; Granato, Elisabetta; Rea, Giuseppina; Scala, Stefania; Terlizzi, Michela; Spaziano, Giuseppe; Sorrentino, Rosalinda; D'Agostino, Bruno; Roviezzo, Fiorentina; Cirino, Giuseppe",
    url: "http://hdl.handle.net/11386/4777667",
    doi: "10.1111/bph.15754"
  },
  {
    title: "5α-dihydrotestosterone abrogates sex bias in asthma like features in the mouse",
    year: 2020,
    authors: "Cerqua, Ida; Terlizzi, Michela; Bilancia, Rossella; A Riemma, Maria; Citi, Valentina; Martelli, Alma; Pace, Simona; Spaziano, Giuseppe; D'Agostino, Bruno; Werz, Oliver; Ialenti, Armando; Sorrentino, Rosalinda; Cirino, Giuseppe; Rossi, Antonietta; Roviezzo, Fiorentina",
    url: "http://hdl.handle.net/11386/4746389",
    doi: "10.1016/j.phrs.2020.104905"
  },
  {
    title: "A lesson from a saboteur: High-MW kininogen impact in coronavirus-induced disease 2019",
    year: 2020,
    authors: "Colarusso, C; Terlizzi, M; Pinto, A; Sorrentino, R",
    url: "http://hdl.handle.net/11386/4748952",
    doi: "10.1111/bph.15154"
  },
  {
    title: "Antioxidant and antimicrobial properties of Pelargonium sidoides DC and lactoferrin combination",
    year: 2020,
    authors: "Terlizzi, M; Colarusso, C; Di Maio, U; Bagnulo, A; Pinto, A; Sorrentino, R.",
    url: "http://hdl.handle.net/11386/4792463",
    doi: "10.1042/BSR20203284"
  },
  {
    title: "Identification of a novel subpopulation of Caspase-4 positive non-small cell lung Cancer patients.",
    year: 2020,
    authors: "Terlizzi, Michela; Colarusso, Chiara; De Rosa, Ilaria; Somma, Pasquale; Curcio, Carlo; Aquino, Rita Patrizia; Panico, Luigi; Salvi, Rosario; Zito Marino, Federica; Botti, Gerardo; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4754410",
    doi: "10.1186/s13046-020-01754-0"
  },
  {
    title: "Role of plasmacytoid dendritic cells in cancer",
    year: 2020,
    authors: "Terlizzi, M; Colarusso, C; Pinto, A; Sorrentino, R",
    url: "http://hdl.handle.net/11386/4748951",
    doi: null // DOI non fornito
  },
  {
    title: "Role of the inflammasome in cancer",
    year: 2020,
    authors: "Terlizzi, M; Colarusso, C; Pinto, A; Sorrentino, R",
    url: "http://hdl.handle.net/11386/4748950",
    doi: null // DOI non fornito
  },
  {
    title: "The combination of N-Acetyl-L-Cysteine, Pelargonium sidoides and Justicia adhatoda (NAXX) exerts bacteriostatic activity against S. aureus and E. coli",
    year: 2020,
    authors: "Terlizzi, Michela; Colarusso, Chiara; Di Maio, Umberto; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4748949",
    doi: "10.1080/14786419.2020.1761359"
  },
  {
    title: "AIM2 Inflammasome Activation Leads to IL-1α and TGF-β Release From Exacerbated Chronic Obstructive Pulmonary Disease-Derived Peripheral Blood Mononuclear Cells.",
    year: 2019,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Molino, Antonio; Imitazione, Pasquale; Somma, Pasquale; Rega, Roberto; Saccomanno, Antonello; Aquino, Rita Patrizia; Pinto, Aldo; Sorrentino, Rosalinda.",
    url: "http://hdl.handle.net/11386/4723096",
    doi: "10.3389/fphar.2019.00257"
  },
  {
    title: "AIM2/IL-1α/TGF-β Axis in PBMCs From Exacerbated Chronic Obstructive Pulmonary Disease (COPD) Patients Is Not Related to COX-2-Dependent Inflammatory Pathway",
    year: 2019,
    authors: "Molino, Antonio; Terlizzi, Michela; Colarusso, Chiara; Rossi, Antonietta; Somma, Pasquale; Saglia, Alessandro; Pinto, Aldo; Sorrentino, Rosalinda.",
    url: "http://hdl.handle.net/11386/4729758",
    doi: "10.3389/fphys.2019.01235"
  },
  {
    title: "Drug resistance in non-small cell lung Cancer (NSCLC): Impact of genetic and non-genetic alterations on therapeutic regimen and responsiveness",
    year: 2019,
    authors: "Terlizzi, Michela; Colarusso, Chiara; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4726236",
    doi: "10.1016/j.pharmthera.2019.06.005"
  },
  {
    title: "The inhibition of caspase-1- does not revert particulate matter (PM)-induced lung immunesuppression in mice",
    year: 2019,
    authors: "Colarusso, Chiara; De Falco, Gianluigi; Terlizzi, Michela; Roviezzo, Fiorentina; Cerqua, Ida; Sirignano, Mariano; Cirino, Giuseppe; Aquino, Rita Patrizia; Pinto, Aldo; D'Anna, Andrea; Sorrentino, Rosalinda.",
    url: "http://hdl.handle.net/11386/4726239",
    doi: "10.3389/fimmu.2019.01329"
  },
  {
    title: "Activation of the Absent in Melanoma 2 Inflammasome in Peripheral Blood Mononuclear Cells From Idiopathic Pulmonary Fibrosis Patients Leads to the Release of Pro-Fibrotic Mediators.",
    year: 2018,
    authors: "Terlizzi, Michela; Molino, Antonio; Colarusso, Chiara; Donovan5, Chantal; Imitazione, Pasquale; Somma, Pasquale; Aquino, Rita P.; Hansbro, Philip M.; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4711218",
    doi: "10.3389/fimmu.2018.00670"
  },
  {
    title: "Circulating and tumor-associated caspase-4: A novel diagnostic and prognostic biomarker for non-small cell lung cancer.",
    year: 2018,
    authors: "Terlizzi, Michela; Colarusso, Chiara; Ilaria De Rosa, ; Nicolina De Rosa, ; Pasquale, Somma; Carlo, Curcio; Alessandro Zamparelli Sanduzzi, ; Pietro, Micheli; Antonio, Molino; Saccomanno, Antonello; Rosario, Salvi; Aquino, Rita P.; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4712178",
    doi: "10.18632/oncotarget.25049"
  },
  {
    title: "Leukotriene-mediated sex dimorphism in murine asthma-like features during allergen sensitization",
    year: 2018,
    authors: "Rossi, Antonietta; Roviezzo, Fiorentina; Sorrentino, Rosalinda; Riemma Maria, Antonietta; Cerqua, Ida; Bilancia, Rossella; Spaziano, Giuseppe; Troisi, Fabiana; Pace, Simona; Pinto, Aldo; D'Agostino, Bruno; Werz, Oliver; Cirino, Giuseppe",
    url: "http://hdl.handle.net/11386/4719026",
    doi: "10.1016/j.phrs.2018.11.024"
  },
  {
    title: "Chronic obstructive pulmonary disease-derived circulating cells release IL-18 and IL-33 under ultrafine particulate matter exposure in a caspase-1/8-independent manner",
    year: 2017,
    authors: "De Falco, G.; Colarusso, C.; Terlizzi, M.; Popolo, A.; Pecoraro, M.; Commodo, M.; Minutolo, P.; D'Anna, A.; Aquino, R. P.; Pinto, A.; Molino, A.; Sorrentino, R.; Sirignano, Marco",
    url: "http://hdl.handle.net/11386/4705012",
    doi: "10.3389/fimmu.2017.01415"
  },
  {
    title: "Human peripheral blood mononuclear cells (PBMCs) from smokers release higher levels of IL-1-like cytokines after exposure to combustion-generated ultrafine particles.",
    year: 2017,
    authors: "Gianluigi, De Falco; Terlizzi, Michela; Mariano, Sirignano; Mario, Commodo; Andrea, D'Anna; Aquino, Rita Patrizia; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4680264",
    doi: "10.1038/srep43016"
  },
  {
    title: "Role of the inflammasome in chronic obstructive pulmonary disease (COPD)",
    year: 2017,
    authors: "Colarusso, Chiara; Terlizzi, Michela; Antonio, Molino; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4683129",
    doi: "10.18632/oncotarget.17850"
  },
  {
    title: "TNFÎ± deficiency results in increased IL-1Î² in an early onset of spontaneous murine colitis",
    year: 2017,
    authors: "De Santis, S.; Kunde, D.; Galleggiante, V.; Liso, M.; Scandiffio, L.; Serino, G.; Pinto, A.; Campiglia, P.; Sorrentino, R.; Cavalcanti, E.; Santino, A.; Caruso, M. L.; Eri, R.; Chieppa, M.",
    url: "http://hdl.handle.net/11386/4706716",
    doi: "10.1038/cddis.2017.397"
  },
  {
    title: "Toll-like receptor 4 is essential for the expression of sphingosine-1-phosphate-dependent asthma-like disease in mice",
    year: 2017,
    authors: "Roviezzo, Fiorentina; Sorrentino, Rosalinda; Terlizzi, Michela; Riemma, Maria Antonietta; Iacono, Valentina Mattera; Rossi, Antonietta; Spaziano, Giuseppe; Pinto, Aldo; D'Agostino, Bruno; Cirino, Giuseppe",
    url: "http://hdl.handle.net/11386/4705028",
    doi: "10.3389/fimmu.2017.01336"
  },
  {
    title: "Disodium cromoglycate inhibits asthma-like features induced by sphingosine-1-phosphate.",
    year: 2016,
    authors: "Roviezzo, Fiorentina; Sorrentino, Rosalinda; Valentina, Mattera Iacono; Vincenzo, Brancaleone; Terlizzi, Michela; Antonietta, Riemma Maria; Antonio, Bertolino; Antonietta, Rossi; Maria, Matteis; Giuseppe, Spaziano; Pinto, Aldo; Bruno, D’Agostino; Giuseppe, Cirino",
    url: "http://hdl.handle.net/11386/4674544",
    doi: "10.1016/j.phrs.2016.09.014"
  },
  {
    title: "IL-1α and IL-1β-producing macrophages populate lung tumor lesions in mice.",
    year: 2016,
    authors: "Terlizzi, Michela; Colarusso, Chiara; Popolo, Ada; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4674542",
    doi: "10.18632/oncotarget.11276"
  },
  {
    title: "Inflammatory mediators in a short-time mouse model of doxorubicin-induced cardiotoxicity",
    year: 2016,
    authors: "Pecoraro, Michela; DEL PIZZO, Mariagiovanna; Marzocco, Stefania; Sorrentino, Rosalinda; Ciccarelli, Michele; Iaccarino, Guido; Pinto, Aldo; Popolo, Ada",
    url: "http://hdl.handle.net/11386/4659576",
    doi: "10.1016/j.taap.2016.01.006"
  },
  {
    title: "Nociceptin reduces the inflammatory immune microenvironment in a conventional murine model of airway hyperresponsiveness",
    year: 2016,
    authors: "Giuseppe, Spaziano; Sorrentino, Rosalinda; Maria, Matteis; Gaetano, Malgieri; Manuela, Sgambato; Palmira, Russo Teresa; Terlizzi, Michela; Fiorentina, Roviezzo; Francesco, Rossi; Pinto, Aldo; Roberto, Fattorusso; Bruno, D’Agostino .",
    url: "http://hdl.handle.net/11386/4674540",
    doi: "10.1111/cea.12808"
  },
  {
    title: "A single infection with Chlamydia pneumoniae is sufficient to exacerbate atherosclerosis in ApoE deficient mice.",
    year: 2015,
    authors: "Sorrentino, Rosalinda; Atilla, Yilmaz; Katja, Schubert; Crother Timothy, R; Pinto, Aldo; Kenichi, Shimada; Moshe, Arditi; Shuang, Chen .",
    url: "http://hdl.handle.net/11386/4671272",
    doi: "10.1016/j.cellimm.2015.01.007"
  },
  {
    title: "B cell depletion increases sphingosine-1-phosphate-dependent airway inflammation in mice.",
    year: 2015,
    authors: "Sorrentino, Rosalinda; Antonio, Bertolino; Terlizzi, Michela; Iacono Valentina, M; Piera, Maiolino; Giuseppe, Cirino; Fiorentina, Roviezzo; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/4671271",
    doi: "10.1165/rcmb.2014-0207OC"
  },
  {
    title: "Doxorubicin-Mediated Cardiotoxicity: Role of Mitochondrial Connexin 43",
    year: 2015,
    authors: "Pecoraro, Michela; Sorrentino, Rosalinda; Franceschelli, Silvia; Mariagiovanna Del, Pizzo; Pinto, Aldo; Popolo, Ada",
    url: "http://hdl.handle.net/11386/4650733",
    doi: "10.1007/s12012-014-9305-8"
  },
  {
    title: "Human Lung Cancer-Derived Immunosuppressive Plasmacytoid Dendritic Cells Release IL-1α in an AIM2 Inflammasome-Dependent Manner",
    year: 2015,
    authors: "Sorrentino, Rosalinda; Terlizzi, Michela; DI CRESCENZO, VINCENZO GIUSEPPE; Popolo, Ada; Pecoraro, Michela; Perillo, Giuseppe; Galderisi, Antonio; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/4651782",
    doi: "10.1016/j.ajpath.2015.07.009"
  },
  {
    title: "Hydrogen sulfide inhalation ameliorates allergen induced airway hypereactivity by modulating mast cell activation.",
    year: 2015,
    authors: "Fiorentina, Roviezzo; Antonio, Bertolino; Sorrentino, Rosalinda; Terlizzi, Michela; Maria, Matteis; Vincenzo, Calderone; Valentina, Mattera; Alma, Martelli; Giuseppe, Spaziano; Pinto, Aldo; Bruno, D'Agostino; Giuseppe, Cirino .",
    url: "http://hdl.handle.net/11386/4671270",
    doi: "10.1016/j.phrs.2015.07.032"
  },
  {
    title: "Lung cancer biomarkers and their methods and diagnostic kits",
    year: 2015,
    authors: "Pinto, Aldo; Aquino, Rita Patrizia; Sorrentino, Rosalinda; Terlizzi, Michela",
    url: "http://hdl.handle.net/11386/4674551",
    doi: null // DOI non fornito
  },
  {
    title: "Pharmacological inhibition of Caspase-8 limits lung tumor outgrowth",
    year: 2015,
    authors: "Terlizzi, Michela; DI CRESCENZO, VINCENZO GIUSEPPE; Perillo, Giuseppe; Galderisi, Antonio; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4646462",
    doi: "10.1111/bph.13176"
  },
  {
    title: "Role of Plasmacytoid Dendritic Cells in Cancer",
    year: 2015,
    authors: "Terlizzi, Michela; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4585458",
    doi: "10.1007/978-3-662-44006-3"
  },
  {
    title: "S1P-induced airway smooth muscle hyperresponsiveness and lung inflammation in vivo: molecular and cellular mechanisms.",
    year: 2015,
    authors: "Fiorentina, Roviezzo; Sorrentino, Rosalinda; Antonio, Bertolino; Luana, De Gruttola; Terlizzi, Michela; Pinto, Aldo; Maria, Napolitano; Giuseppe, Castello; Bruno, D'Agostino; Angela, Ianaro; Raffaella, Sorrentino; Giuseppe, Cirino",
    url: "http://hdl.handle.net/11386/4671267",
    doi: "10.1111/bph.13033"
  },
  {
    title: "BIOMARCATORI DEL TUMORE POLMONARE, E RELATIVI METODI DIAGNOSTICI E KIT",
    year: 2014,
    authors: "Pinto, Aldo; Aquino, Rita Patrizia; Sorrentino, Rosalinda; Terlizzi, Michela",
    url: "http://hdl.handle.net/11386/4674548",
    doi: null // DOI non fornito
  },
  {
    title: "Inflammasome: Cancer's friend or foe?",
    year: 2014,
    authors: "Terlizzi, Michela; Casolaro, Vincenzo; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4279653",
    doi: "10.1016/j.pharmthera.2014.02.002"
  },
  {
    title: "Plasmacytoid Dendritic Cells Contribute to Doxorubicin-induced Tumor Arrest in a Mouse Model of Pulmonary Metastasis.",
    year: 2014,
    authors: "Terlizzi, Michela; Popolo, Ada; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4343254",
    doi: "10.1097/CJI.0000000000000026"
  },
  {
    title: "Antiadrenergic effect of adenosine involves connexin 43 turn-over in H9c2 cells",
    year: 2013,
    authors: "Popolo, Ada; Morello, Silvana; Sorrentino, Rosalinda; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/4022252",
    doi: "10.1016/j.ejphar.2013.06.019"
  },
  {
    title: "Plasmacytoid dendritic cells play a key role in tumor progression in lipopolysaccharide-stimulated lung tumor-bearing mice.",
    year: 2013,
    authors: "Rega, A; Terlizzi, M; Luciano, A; Forte, G; Crother, Tr; Arra, C; Arditi, M; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4024653",
    doi: "10.4049/jimmunol.1202086"
  },
  {
    title: "The adenosinergic system in cancer: Key therapeutic target",
    year: 2013,
    authors: "Sorrentino, Rosalinda; Pinto, Aldo; Morello, Silvana",
    url: "http://hdl.handle.net/11386/4027925",
    doi: "10.4161/onci.22448"
  },
  {
    title: "The uremic toxin indoxyl sulphate enhances macrophage response to LPS.",
    year: 2013,
    authors: "Adesso, S; Popolo, Ada; Bianco, G; Sorrentino, Rosalinda; Pinto, Aldo; Autore, Giuseppina; Marzocco, Stefania",
    url: "http://hdl.handle.net/11386/4135453",
    doi: "10.1371/journal.pone.0076778"
  },
  {
    title: "Adoptive Immunotherapy with Cl-IB-MECA-Treated CD8+ T Cells Reduces Melanoma Growth in Mice.",
    year: 2012,
    authors: "Montinaro, A; Forte, G; Sorrentino, Rosalinda; Luciano, A; Palma, G; Arra, C; Adcock, Im; Pinto, Aldo; Morello, Silvana",
    url: "http://hdl.handle.net/11386/3880960",
    doi: "10.1371/journal.pone.0045401"
  },
  {
    title: "Inhibition of CD73 improves B cell-mediated anti-tumor immunity in a mouse model of melanoma",
    year: 2012,
    authors: "Forte, Giovanni; Sorrentino, Rosalinda; Montinaro, Antonella; Antonio, Luciano; Ian M., Adcock; Piera, Maiolino; Claudio, Arra; Carla, Cicala; Pinto, Aldo; Morello, Silvana",
    url: "http://hdl.handle.net/11386/3865290",
    doi: "10.4049/jimmunol.1200744"
  },
  {
    title: "Plasmacytoid dendritic cells and their therapeutic activity in cancer.",
    year: 2012,
    authors: "Pinto, Aldo; Rega, A; Crother, Tr; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/4024652",
    doi: "10.4161/onci.20171"
  },
  {
    title: "Polyinosinic-polycytidylic Acid limits tumor outgrowth in a mouse model of metastatic lung cancer.",
    year: 2012,
    authors: "Forte, G; Rega, A; Morello, Silvana; Luciano, A; Arra, C; Pinto, Aldo; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/3132477",
    doi: "10.4049/jimmunol.1103811"
  },
  {
    title: "B Cells contribute to the Anti-tumour Activity of CpG-ODN in a Mouse Model of Metastatic Lung Carcinoma",
    year: 2011,
    authors: "Sorrentino, Rosalinda; Morello, Silvana; Forte, Giovanni; Montinaro, Antonella; De Vita, G; Luciano, A; Palma, G; Arra, C; Maiolino, P; Adcock, Im; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/3023166",
    doi: "10.1164/rccm.201010-1738OC"
  },
  {
    title: "Cl-IB-MECA enhances TNF-α release in peritoneal macrophages stimulated with LPS.",
    year: 2011,
    authors: "Forte, Giovanni; Sorrentino, Rosalinda; Montinaro, Antonella; Pinto, Aldo; Morello, Silvana",
    url: "http://hdl.handle.net/11386/3023160",
    doi: "10.1016/j.cyto.2011.02.002"
  },
  {
    title: "CpG-ODN increases the release of VEGF in a mouse model of lung carcinoma.",
    year: 2011,
    authors: "Sorrentino, Rosalinda; Morello, Silvana; Giordano, Mg; Arra, C; Maiolino, P; Adcock, Im; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/3023162",
    doi: "10.1002/ijc.25626"
  },
  {
    title: "Cytotoxic activity of nemorosone in human MCF-7 breast cancer cells",
    year: 2011,
    authors: "Popolo, Ada; Piccinelli, ANNA LISA; Morello, Silvana; Sorrentino, Rosalinda; Osmany Cuesta, Rubio; Rastrelli, Luca; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/3019889",
    doi: "10.1139/Y10-100"
  },
  {
    title: "Hydrogen sulfide-induced dual vascular effect involves arachidonic acid cascade in rat mesenteric arterial bed.",
    year: 2011,
    authors: "d'Emmanuele di Villa Bianca, R; Sorrentino, Rosalinda; Coletta, C; Mitidieri, E; Rossi, A; Vellecco, V; Pinto, Aldo; Cirino, G; Sorrentino, R.",
    url: "http://hdl.handle.net/11386/3023161",
    doi: "10.1124/jpet.110.176016"
  },
  {
    title: "Lung cancer and Toll-like receptors.",
    year: 2011,
    authors: "Pinto, Aldo; Morello, Silvana; Sorrentino, Rosalinda",
    url: "http://hdl.handle.net/11386/3040051",
    doi: "10.1007/s00262-011-1057-8"
  },
  {
    title: "NK1.1 cells and CD8 T cells mediate the antitumor activity of Cl-IB-MECA in a mouse melanoma model.",
    year: 2011,
    authors: "Morello, Silvana; Sorrentino, Rosalinda; Montinaro, Antonella; Luciano, Antonio; Maiolino, Piera; Ngkelo, Anta; Arra, Claudio; Adcock Ian, M; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/3023159",
    doi: "10.1593/neo.101628"
  },
  {
    title: "Plasmacytoid dendritic cells alter the antitumor activity of CpG-oligodeoxynucleotides in a mouse model of lung carcinoma.",
    year: 2010,
    authors: "Sorrentino, Rosalinda; Morello, Silvana; Antonio, Luciano; Timothy R., Crother; Piera, Maiolino; Eduardo, Bonavita; Claudio, Arra; Ian M., Adcock; Moshe, Arditi; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/3006801",
    doi: "10.4049/jimmunol.1000881"
  },
  {
    title: "Plasmacytoid dendritic cells prevent cigarette smoke and Chlamydophila pneumoniae-induced Th2 inflammatory responses.",
    year: 2010,
    authors: "Sorrentino, Rosalinda; Gray, P; Chen, S; Shimada, K; Crother, Tr; Arditi, M.",
    url: "http://hdl.handle.net/11386/3023168",
    doi: "10.1165/rcmb.2009-0224OC"
  },
  {
    title: "Plasmacytoid dendritic cells: from heart to vessels.",
    year: 2010,
    authors: "Sorrentino, Rosalinda; Morello, Silvana; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/3023167",
    doi: "10.1155/2010/430318"
  },
  {
    title: "Role of plasmacytoid dendritic cells in lung-associated inflammation.",
    year: 2010,
    authors: "Sorrentino, Rosalinda; Morello, Silvana; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/3008483",
    doi: "10.2174/187221310791163062"
  },
  {
    title: "The Activation of Liver X Receptor Inhibits Toll-Like Receptor-9-Induced Foam Cell Formation",
    year: 2010,
    authors: "Sorrentino, Rosalinda; Morello, Silvana; Chen, S; Bonavita, E; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/3117827",
    doi: "10.1002/jcp.22022"
  },
  {
    title: "Adenosine A2a receptor agonists as regulators of inflammation: pharmacology and therapeutic opportunities",
    year: 2009,
    authors: "Morello, Silvana; Sorrentino, Rosalinda; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/2280816",
    doi: "10.2147/JRLCR.S4710"
  },
  {
    title: "Cl-IB-MECA enhances TRAIL-induced apoptosis via the modulation of NF-kappaB signalling pathway in thyroid cancer cells.",
    year: 2009,
    authors: "Morello, Silvana; Sorrentino, Rosalinda; Porta, Amalia; Forte, G; Popolo, Ada; Petrella, Antonello; Pinto, Aldo",
    url: "http://hdl.handle.net/11386/2288912",
    doi: "10.1002/jcp.21863"
  },
  {
    title: "Innate Immunity, Toll-like Receptors, and Atherosclerosis: mouse models and methods.",
    year: 2009,
    authors: "Sorrentino, Rosalinda; Arditi, M.",
    url: "http://hdl.handle.net/11386/1995839",
    doi: "10.1007/978-1-59745-541-1_23"
  },
  {
    title: "Involvement of Innate and Adaptive Immunity in a Murine Model of Coronary Arteritis Mimicking Kawasaki Disease",
    year: 2009,
    authors: "DANICA J., Schulte; Atilla, Yilmaz; Kenichi, Shimada; Michael, Fishbein; EMILY L., Lowe; Shuang, Chen; Michelle, Wong; TERRENCE M., Doherty; Thomas, Lehman; TIMOTHY R., Crother; Sorrentino, Rosalinda; Arditi, M.",
    url: "http://hdl.handle.net/11386/2280781",
    doi: "10.4049/jimmunol.0901395"
  },
  {
    title: "Recombinant human erythropoietin prevents lipopolysaccharide-induced vascular hyporeactivity in the rat.",
    year: 2009,
    authors: "R., D'EMMANUELE DI VILLA BIANCA; Sorrentino, Rosalinda; E., Mitidieri; Marzocco, Stefania; Autore, Giuseppina; C., Thiemermann; Pinto, Aldo; R., Sorrentino",
    url: "http://hdl.handle.net/11386/1995844",
    doi: "10.1097/SHK.0b013e31818909c0"
  },
  {
    title: "The NOD/RIP2 Pathway Is Essential for Host Defenses Against Chlamydophila pneumoniae Lung Infection.",
    year: 2009,
    authors: "Shimada, K; Chen, S; Dempsey, Pw; Sorrentino, Rosalinda; Alsabeh, R; Slepenkin, Av; Peterson, E; Doherty, Tm; Underhill, D; Crother, Tm; AND ARDITI, M.",
    url: "http://hdl.handle.net/11386/1995838",
    doi: "10.1371/journal.ppat.1000379"
  },
  {
    title: "Toll-like receptor 2 is essential for the sensing of oxidants during inflammation.",
    year: 2009,
    authors: "Paul Clark, Mark J.; Mcmaster, Shaun K.; Sorrentino, Rosalinda; Sriskandan, Shiranee; Bailey, Lucy K.; Moreno, Laura; Ryffel, Bernhard; Quesniaux, Valerie F.; Mitchell, Jane A.",
    url: "http://hdl.handle.net/11386/1995836",
    doi: "10.1164/rccm.200707-1019OC"
  },
  {
    title: "Chlamydia pneumoniae-induced foam cell formation requires MyD88-dependent and -independent signaling and is reciprocally modulated by liver X receptor activation.",
    year: 2008,
    authors: "Chen, S; Sorrentino, Rosalinda; Shimada, K; Bulut, Y; Doherty, Tm; Crother, Tr; Arditi, M.",
    url: "http://hdl.handle.net/11386/1995840",
    doi: null // DOI non fornito
  },
  {
    title: "Differential regulation of CCL-11/eotaxin-1 and CXCL-8/IL-8 by Gram-positive and Gram-negative bacteria in human airway smooth muscle cells.",
    year: 2008,
    authors: "Issa, R; Sorrentino, Rosalinda; Sukkar, Mb; Sriskandan, S; Chung, Kf; Mitchell, Ja",
    url: "http://hdl.handle.net/11386/1995841",
    doi: "10.1186/1465-9921-9-30"
  },
  {
    title: "Gram positive and Gram negative bacteria synergise with oxidants to release CXCL8 from innate immune cells.",
    year: 2008,
    authors: "PAUL CLARK, Mj; Sorrentino, Rosalinda; Bailey, Lk; Sriskandan, S; Mitchell, Ja",
    url: "http://hdl.handle.net/11386/1995843",
    doi: "10.2119/2007-00098.Paul-Clark"
  },
  {
    title: "PATTERN RECOGNITION RECEPTORS AND INTERLEUKIN-8 MEDIATE EFFECTS OF GRAM-POSITIVE AND GRAM NEGATIVE BACTERIA ON LUNG EPITHELIAL CELL FUNCTION.",
    year: 2008,
    authors: "Sorrentino, Rosalinda; PM DE, Souza; S., Sriskandan; C., Duffin; MJ PAUL CLARK AND JA, Mitchell",
    url: "http://hdl.handle.net/11386/1995845",
    doi: "10.1038/bjp.2008.139"
  },
  {
    title: "TLR/MyD88 and liver X receptor alpha signaling pathways reciprocally control Chlamydia pneumoniae-induced acceleration of atherosclerosis.",
    year: 2008,
    authors: "Naiki, Y; Sorrentino, Rosalinda; Wong, Mh; Michelsen, Ks; Shimada, K; Chen, S; Yilmaz, A; Slepenkin, A; Schröder, Nw; Crother, Tr; Bulut, Y; Doherty, Tm; Bradley, M; Shaposhnik, Z; Peterson, Em; Tontonoz, P; Shah, Pk; Arditi, M.",
    url: "http://hdl.handle.net/11386/1995842",
    doi: null // DOI non fornito
  },
  {
    title: "Differential effects of Gram positive versus Gram negative bacteria on NOSII and TNF-a in macrophages: role of TLRs in synergy between the two.",
    year: 2006,
    authors: "Clark, Mjp; Belcher, E; Mcmasters, S; Anandarajah, J; Sorrentino, Rosalinda; Fleet, M; Sriskandan, S; AND MITCHELL, Ja",
    url: "http://hdl.handle.net/11386/1995846",
    doi: "10.1038/sj.bjp.0706815"
  },
  {
    title: "ELUCIDATION OF TOLL-LIKE RECEPTOR AND ADAPTER PROTEIN SIGNALLING INDUCED BY GRAM POSITIVE S.AUREUS OR GRAM NEGATIVE E.COLI.",
    year: 2006,
    authors: "N., Cartwright; S. K., Mcmaster; Sorrentino, Rosalinda; M. J., PAUL CLARK; S., Sriskandan; B., Ryffel; V., FJ QUESNIAUX; T. W., Evans; J. A., Mitchell",
    url: "http://hdl.handle.net/11386/1995847",
    doi: "10.1097/01.shk.0000235127.59492.db"
  },
  {
    title: "SPHINGOSINE-1PHOSPHATE INDUCES ENDOTHELIAL NOS ACTIVATION THROUGH PHOSPHORYLATION IN HUMAN CORPUS CAVERNOSUM",
    year: 2006,
    authors: "R., D'EMMANUELE DI VILLA BIANCA; Sorrentino, Rosalinda; Sorrentino, R.; Imbimbo, C; Palmieri, A; Fusco, F; Maggi, M; DE PALMA, R; Cirino, G; Mirone, V.",
    url: "http://hdl.handle.net/11386/2295169",
    doi: null // DOI non fornito
  }
];


export default function AllPublications() {
  const publicationsByYear = allPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(publicationsByYear).sort((a, b) => b - a);

  // 👇 Stato per l’anno selezionato
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredYears =
    selectedYear === "All" ? years : [selectedYear];

  return (
    <div>
      <Navbar />
      <section className="sectionpub">
        <h2>All Publications</h2>

        {/* --- FILTRO ANNI --- */}
        <div className="year-filter">
          <button
            className={selectedYear === "All" ? "active" : ""}
            onClick={() => setSelectedYear("All")}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              className={selectedYear === year ? "active" : ""}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* --- ELENCO PUBBLICAZIONI --- */}
        {filteredYears.map((year) => (
          <div key={year} className="publication-year">
            <h3>{year}</h3>
            <ul className="publications-list">
              {publicationsByYear[year].map((pub, idx) => (
                <li key={idx} className="publication-item">
                  <strong>{pub.title}</strong>
                  <p className="publication-meta">{pub.authors}</p>
                  <p className="publication-meta">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>{" "}
                    | DOI: {pub.doi}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
