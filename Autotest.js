//Создал коллекцию, состоящую из 3 GET запросов.

//Этот тест, для проверки получения ответа от бэкенда, статуса 200.
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//Тест для проверки скорости обработки запроса.
pm.test("Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

//Тест для проверки получения статуса "ОК".
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

//Также прогнал эти автотесты, сразу для всей коллекции.
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});