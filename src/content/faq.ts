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
    answer: 'Bei vielen Kfz-Versicherungen beträgt die vertraglich vereinbarte Kündigungsfrist einen Monat zum Vertragsablauf. Maßgeblich sind Ihre jeweiligen Versicherungsbedingungen. Nach § 11 Abs. 3 VVG darf die Kündigungsfrist gesetzlich zwischen einem und drei Monaten betragen. Endet Ihr Vertrag wie bei vielen Kfz-Policen am 31. Dezember, muss das Kündigungsschreiben bei einmonatiger Frist spätestens am 30. November (23:59 Uhr) beim Versicherer vorliegen. Bei unterjährigen Verträgen gilt die Frist entsprechend vor dem individuellen Ablaufdatum.'
  },
  {
    question: 'Muss jeder Vertrag bis zum 30. November gekündigt werden?',
    answer: 'Nein. Der Stichtag 30. November gilt nur für Policen, deren Versicherungsjahr mit dem Kalenderjahr übereinstimmt und am 31. Dezember endet. Bei Verträgen mit unterjähriger Laufzeit (beispielsweise Beginn und Ablauf jeweils zum Zulassungsdatum, etwa 1. Mai bis 30. April) muss die Kündigung einen Monat vor diesem Ablaufdatum eingehen (im Beispiel bis 31. März). Prüfen Sie daher stets das Ablaufdatum in Ihrem Versicherungsschein.'
  },
  {
    question: 'Wie läuft die Kündigung der Kfz-Versicherung ab?',
    answer: 'Für seit dem 1. Oktober 2016 geschlossene Verträge genügt nach § 126b BGB die Textform (z. B. E-Mail, Fax oder Kundenportal). Ältere Verträge können noch die Schriftform mit eigenhändiger Unterschrift verlangen. Wichtig ist stets der Nachweis des rechtzeitigen Zugangs (z. B. qualifizierter Sendebericht beim Fax oder Einschreiben).'
  },
  {
    question: 'Sollte ich eine Teilkasko oder Vollkasko wählen?',
    answer: 'Die gesetzliche Haftpflicht ist Pflicht nach § 1 PflVG. Eine Vollkasko empfiehlt sich typischerweise für Neu- und Leasingfahrzeuge sowie hochwertige Fahrzeuge bis etwa vier bis fünf Jahre, da sie auch selbstverschuldete Unfallschäden und Vandalismus abdeckt. Die Teilkasko schützt ältere Fahrzeuge vor unverschuldeten Risiken wie Diebstahl, Glasbruch, Sturm, Hagel und Tierschäden.'
  },
  {
    question: 'Wann greift das Sonderkündigungsrecht nach § 40 VVG?',
    answer: 'Ein Sonderkündigungsrecht nach § 40 Abs. 1 VVG besteht insbesondere, wenn der Versicherer den Beitrag erhöht, ohne dass sich der Leistungsumfang entsprechend verbessert. Nach § 40 Abs. 1 Satz 2 VVG beträgt die Kündigungsfrist genau einen Monat ab tatsächlichem Zugang der Mitteilung über die Beitragserhöhung. Die Kündigung wird zu dem Zeitpunkt wirksam, zu dem die Erhöhung in Kraft treten sollte. Auch nach Abschluss einer Schadenregulierung oder bei Fahrzeugabmeldung/Fahrzeugwechsel besteht ein Kündigungsrecht.'
  },
  {
    question: 'Kann ich auch nach dem 30. November wechseln?',
    answer: 'Ja. Ein Wechsel nach dem 30. November ist möglich, wenn Ihr Vertrag eine unterjährige Laufzeit hat, wenn Sie ein neues oder gebrauchtes Fahrzeug zulassen oder wenn Ihnen ein Sonderkündigungsrecht nach § 40 VVG zusteht (etwa weil Ihnen die Beitragsrechnung mit einer Erhöhung erst im November oder Dezember zugeht).'
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
