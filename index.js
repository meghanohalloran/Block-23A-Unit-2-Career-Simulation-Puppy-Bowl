try {
  const response = await fetch(
    'https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Rufus',
        breed: 'Irish Setter',
      }),
    }
  );
  const result = await response.json();
  console.log(result);
} catch (err) {
  console.error(err);
}
  
  {
    "success": true,
    "error": null,
    "data": {
        "players": [
            {
                "id": 2,
                "name": "Crumpet",
                "breed": "American Staffordshire Terrier",
                "status": "field",
                "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg",
                "createdAt": "2501-ftb-et-web-ft",
                "updatedAt": "2021-06-15T16:21:14.103Z",
                "teamId": 1,
                "cohortId": 1
            },
            {
                "id": 4,
                "name": "Daphne",
                "breed": "German Shepherd",
                "status": "field",
                "imageUrl": "http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg",
                "createdAt": "2021-06-15T16:21:14.103Z",
                "updatedAt": "2021-06-15T16:21:14.103Z",
                "teamId": 2,
                "cohortId": 1
            },
            {
                "id": 10,
                "name": "Kenny",
                "breed": "Golden Retriever / Boxer",
                "status": "bench",
                "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg",
                "createdAt": "2021-06-15T16:21:14.103Z",
                "updatedAt": "2021-06-15T16:21:14.103Z",
                "teamId": 2,
                "cohortId": 1
            }
        ]
    }
}