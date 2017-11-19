
a(`${API_URL}/a`, function(resultFromA) {
    b(`${API_URL}/b/${resultFromA.id}`, function(resultFromB) {
        c(`${API_URL}/c/${resultFromB.id}`, function(resultFromC) {
            d(`${API_URL}/d/${resultFromC.id}`, function(resultFromD) {
                e(`${API_URL}/e/${resultFromD.id}`, function(resultFromE) {
                    f(`${API_URL}/f/${resultFromE.id}`, function(resultFromF) {
                        g(`${API_URL}/g/${resultFromF.id}`, function(resultFromG) {
                            renderList(resultFromG);
                        });
                    });
                });
            });
        });
    });
});

