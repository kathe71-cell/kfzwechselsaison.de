export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Wann ist der beste Zeitpunkt, die Kfz-Versicherung zu wechseln?',
    answer: 'Der beste Zeitpunkt für einen Wechsel ist in der Regel im Herbst. Viele Versicherer passen zu dieser Zeit ihre Tarife für das Folgejahr an und bieten neue Konditionen. Ein Vergleich lohnt sich ab Oktober, um rechtzeitig vor Ablauf der Kündigungsfrist im November zu reagieren.'
  },
  {
    question: 'Wie lang ist die Kündigungsfrist bei der Kfz-Versicherung?',
    answer: 'Die reguläre Kündigungsfrist bei Kfz-Versicherungen beträgt fast immer einen Monat zum Ende des Versicherungsjahres. Bei Verträgen, bei denen das Versicherungsjahr dem Kalenderjahr entspricht, muss die Kündigung spätestens Ende November beim Versicherer eingegangen sein. Die genauen Bedingungen finden Sie in Ihrer Police.'
  },
  {
    question: 'Muss jeder Vertrag bis zum 30. November gekündigt werden?',
    answer: 'Nein, das gilt nicht für alle Verträge. Der Stichtag 30. November betrifft nur Versicherungen, deren Versicherungsjahr mit dem Kalenderjahr übereinstimmt und am 31. Dezember endet. Immer mehr Versicherer bieten unterjährige Verträge an, die beispielsweise an dem Tag beginnen und enden, an dem das Auto zugelassen wurde. Prüfen Sie daher immer die genauen Laufzeiten in Ihren Vertragsunterlagen.'
  },
  {
    question: 'Wie läuft die Kündigung der Kfz-Versicherung ab?',
    answer: 'Eine Kündigung sollte in Textform erfolgen, zum Beispiel per E-Mail, Fax oder Brief. Viele Versicherer bieten mittlerweile auch eine Kündigung über das Kundenportal auf ihrer Website an. Wichtig ist, dass Sie sich den Eingang der Kündigung bestätigen lassen, um einen Nachweis zu haben.'
  },
  {
    question: 'Sollte ich eine Teilkasko oder Vollkasko wählen?',
    answer: 'Die gesetzliche Haftpflicht ist verpflichtend, Kaskoversicherungen sind freiwillige Zusatzleistungen. Eine Vollkasko empfiehlt sich in der Regel für Neuwagen und Fahrzeuge bis zu einem Alter von etwa drei bis fünf Jahren, da sie auch selbst verschuldete Schäden abdeckt. Die Teilkasko ist sinnvoll für ältere Fahrzeuge und zahlt unter anderem bei Diebstahl, Glasbruch oder Wildunfällen.'
  },
  {
    question: 'Wann greift das Sonderkündigungsrecht?',
    answer: 'Ein Sonderkündigungsrecht besteht insbesondere dann, wenn der Versicherer die Beiträge erhöht, ohne gleichzeitig die Leistungen zu verbessern. Auch nach einem regulierten Schadensfall oder bei einem Fahrzeugwechsel können Sie den Vertrag außerordentlich kündigen. Die Frist für die Sonderkündigung beträgt in der Regel einen Monat nach Erhalt der Änderungsmitteilung oder Schadensabwicklung.'
  },
  {
    question: 'Kann ich auch nach dem November wechseln?',
    answer: 'Ja, ein Wechsel nach November ist möglich, wenn Sie einen unterjährigen Vertrag haben oder ein Sonderkündigungsrecht vorliegt, etwa wegen einer Beitragserhöhung. Auch bei der Zulassung eines neuen oder gebrauchten Fahrzeugs können Sie sich jederzeit für einen anderen Versicherer entscheiden. Für kalenderjahrbezogene Verträge ohne Besonderheiten ist der Stichtag jedoch bindend.'
  },
  {
    question: 'Was passiert, wenn ich die Kündigungsfrist verpasst habe?',
    answer: 'Wenn Sie die Kündigungsfrist verpassen, verlängert sich der Vertrag in der Regel automatisch um ein weiteres Jahr. Sie sind dann für diesen Zeitraum weiterhin an den bisherigen Versicherer gebunden. Prüfen Sie in diesem Fall aufmerksam die Jahresrechnung, ob eventuell ein Sonderkündigungsrecht durch eine Beitragserhöhung greift.'
  },
  {
    question: 'Was geschieht mit meinem Schadenfreiheitsrabatt bei einem Wechsel?',
    answer: 'Ihre schadenfreien Jahre (Schadenfreiheitsklassen) gehen bei einem Wechsel nicht verloren. Der neue Versicherer fragt die Daten beim Vorversicherer ab und übernimmt Ihre SF-Klasse. Beachten Sie jedoch, dass die Einstufung in die Rabattstaffeln je nach Versicherer leicht variieren kann.'
  },
  {
    question: 'Welche Kosten fallen bei einem Versicherungswechsel an?',
    answer: 'Für den reinen Versicherungswechsel fallen in der Regel keine Gebühren an. Weder der alte noch der neue Versicherer erheben Wechselgebühren für diesen Vorgang. Die einzigen Kosten sind die Prämien für die neue Kfz-Versicherung, die im besten Fall niedriger sind als bisher.'
  },
  {
    question: 'Worauf sollte ich bei den Leistungen der Kfz-Versicherung achten?',
    answer: 'Die Deckungssummen der Haftpflichtversicherung sollten deutlich über den gesetzlichen Mindestsummen liegen (oft werden 100 Mio. Euro empfohlen). Bei Kaskoversicherungen ist der Verzicht auf den Einwand der groben Fahrlässigkeit ein wichtiges Merkmal. Auch die erweiterte Wildschadendeckung (Tiere aller Art) ist sehr empfehlenswert.'
  },
  {
    question: 'Was bedeutet Werkstattbindung und lohnt sich das?',
    answer: 'Bei einem Tarif mit Werkstattbindung verpflichten Sie sich, Kaskoschäden an Ihrem Fahrzeug in einer Partnerwerkstatt der Versicherung reparieren zu lassen. Im Gegenzug gewährt der Versicherer einen Rabatt auf den Kaskobeitrag. Für Leasingfahrzeuge oder finanzierte Neuwagen ist dies oft nicht zu empfehlen, da Verträge meist die Reparatur in Markenwerkstätten fordern.'
  },
  {
    question: 'Wie finde ich meine aktuelle SF-Klasse heraus?',
    answer: 'Ihre aktuelle Schadenfreiheitsklasse finden Sie auf der letzten Beitragsrechnung Ihres Versicherers. Dort ist die SF-Klasse für die Haftpflicht- und, falls vorhanden, für die Vollkaskoversicherung detailliert angegeben. Alternativ können Sie diese Information auch im Online-Portal oder beim Kundenservice erfragen.'
  },
  {
    question: 'Wie funktioniert ein Versicherungsvergleich?',
    answer: 'Für einen Vergleich benötigen Sie die Schlüsselnummern (HSN/TSN) Ihres Fahrzeugs aus dem Fahrzeugschein sowie Ihre aktuelle SF-Klasse. Sie geben zudem Daten zu Fahrern, jährlicher Fahrleistung und gewünschtem Schutz ein. Der Vergleichsrechner ermittelt daraus dann die passenden Tarife.'
  },
  {
    question: 'Was ist, wenn der neue Versicherer mir kündigt oder mich ablehnt?',
    answer: 'Im Bereich der gesetzlichen Kfz-Haftpflichtversicherung besteht ein Kontrahierungszwang, das heißt, der Versicherer muss Sie in der Regel annehmen. Bei freiwilligen Zusatzleistungen wie Teil- oder Vollkasko kann ein Versicherer den Antrag jedoch ablehnen, zum Beispiel nach negativer Bonitätsprüfung. Kündigt der Versicherer im Schadensfall, haben Sie meist einen Monat Zeit, eine neue Versicherung zu finden.'
  }
];
