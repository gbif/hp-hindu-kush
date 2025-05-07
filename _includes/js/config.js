var siteTheme = gbifReactComponents.themeBuilder.extend({
    baseTheme: 'light', extendWith: {
        primary: themeStyle.colors.primary
    }
});

var publisherKeys = [
    '760d5f24-4c04-40da-9646-1b2c935da502',
    '2e7df380-8356-4533-bcb3-5459e23c794e',
    '8e1a97a0-3ca8-11d9-8439-b8a03c50a862',
];

var institutionKeys = [
    '68fcaba0-61fe-4e78-a460-4f37654d025d',
    '59f46093-8fae-47f3-a9ef-e5fd1d38e4fe',
    '44e7a331-0270-4c39-ad64-91c0d8416480',
];

var siteConfig = {
    "version": 3,
    "pages": [
        {
            "id": "occurrenceSearch"
        },
        {
            "id": "datasetKey"
        },
    ],
    "disableInlineTableFilterButtons": false,
    "availableCatalogues": [
        "OCCURRENCE"
    ],
    "dataHeader": {
        "enableApiPopup": false,
        "enableInfoPopup": false
    },
    "theme": {
        "primary": "#001972",
        "borderRadius": 3,
        "stickyOffset": "0px"
    },
    "maps": {
        "mapStyles": {
            "defaultProjection": "MERCATOR",
            "defaultMapStyle": "BRIGHT",
            "options": {
                "MERCATOR": [
                    "BRIGHT",
                    "NATURAL"
                ]
            }
        }
    },
    "languages": [
        {
            "code": "en",
            "localeCode": "en",
            "label": "English",
            "default": true,
            "textDirection": "ltr",
            "iso3LetterCode": "eng",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        },
        {
            "code": "da",
            "localeCode": "da",
            "label": "Dansk",
            "default": false,
            "textDirection": "ltr",
            "iso3LetterCode": "dan",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        }
    ],
    "messages": {},
    "occurrenceSearch": {
        "scope": {
            type: 'and', predicates: [
                { type: 'equals', key: 'occurrenceStatus', value: 'PRESENT' },
                {
                    "type": "within",
                    "key": "geometry",
                    "value": "POLYGON((74.00293 30.111,76.85202 24.61471,84.08109 29.78463,86.25981 21.13837,93.11546 25.22334,101.748 23.28768,98.56764 35.80232,92.84888 30.947,87.80735 35.12704,83.81353 33.03555,79.48354 35.71901,74.00293 30.111))"
                }]
        },
        "highlightedFilters": [
            "taxonKey",
            "country",
            "year",
            "geometry",
            "issue",
        ],
        "excludedFilters": [
            "networkKey",
            "occurrenceStatus",
            "hostingOrganizationKey",
            "protocol",
            "publishingCountry",
            "institutionCode",
            "collectionCode"
        ],
        "defaultEnabledTableColumns": [
            "features",
            "country",
            "year",
            "recordedBy",
            "identifiedBy"
        ],
        "tabs": [
            "table",
            "gallery",
            "map",
            // "clusters",
            "dashboard",
            "download"
        ],
        "mapSettings": {
            "lat": 27.63,
            "lng": 85.62,
            "zoom": 5.22
        }
    },
    "collectionSearch": {
        excludedFilters: ['country', 'active'],
        // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
        // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
        scope: {
            institutionKey: institutionKeys,
            active: true
        },
    },
    "institutionSearch": {},
    "datasetSearch": {
        excludedFilters: ['publishingCountry', 'networkKey', 'projectId', 'hostingOrg'],
        highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
        // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
        scope: {
            publishingOrg: publisherKeys
        },
    },
    "publisherSearch": {},
    "literatureSearch": {
        "scope": {
            "type": "in",
            "key": "publishingOrganizationKey",
            "values": [
                "760d5f24-4c04-40da-9646-1b2c935da502",
                "2e7df380-8356-4533-bcb3-5459e23c794e",
                "8e1a97a0-3ca8-11d9-8439-b8a03c50a862"
            ]
        }
    }
}