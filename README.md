# api-response-json

## ติดตั้ง
```
npm i -S api-response-json

ro

yarn add api-response-json
```

## วิธีใช้

```

const arj = require('api-response-json')

arj.ok(res,true,"ช้อความ", {data: })

```

## component

### code: 100

#### arj.continue(res,boolean,string, object)

```
arj.continue(res,true,"ช้อความ", {data: })
```

### code: 101

#### arj.switchingProtocols(res,boolean,string, object)

```
arj.switchingProtocols(res,true,"ช้อความ", {data: })
```

### code: 102

#### arj.processing(res,boolean,string, object)

```
arj.processing(res,true,"ช้อความ", {data: })
```

### code: 102

#### arj.processing(res,boolean,string, object)

```
arj.processing(res,true,"ช้อความ", {data: })
```

### code: 200

#### arj.ok(res,boolean,string, object)

```
arj.ok(res,true,"ช้อความ", {data: })
```

### code: 201

#### arj.ok(res,boolean,string, object)

```
arj.create(res,true,"ช้อความ", {data: })
```

### code: 202

#### arj.accepted(res,boolean,string, object)

```
arj.accepted(res,true,"ช้อความ", {data: })
```

### code: 203

#### arj.nonAuthoritativeInformation(res,boolean,string, object)

```
arj.nonAuthoritativeInformation(res,true,"ช้อความ", {data: })
```

### code: 204

#### arj.noContent(res,boolean,string, object)

```
arj.noContent(res,true,"ช้อความ", {data: })
```

### code: 205

#### arj.resetContent(res,boolean,string, object)

```
arj.resetContent(res,true,"ช้อความ", {data: })
```

### code: 206

#### arj.partialContent(res,boolean,string, object)

```
arj.partialContent(res,true,"ช้อความ", {data: })
```

### code: 207

#### arj.multiStatus(res,boolean,string, object)

```
arj.multiStatus(res,true,"ช้อความ", {data: })
```

### code: 300

#### arj.multipleChoices(res,boolean,string, object)

```
arj.multipleChoices(res,true,"ช้อความ", {data: })
```

### code: 301

#### arj.movedPermanently(res,boolean,string, object)

```
arj.movedPermanently(res,true,"ช้อความ", {data: })
```

### code: 302

#### arj.found(res,boolean,string, object)

```
arj.found(res,true,"ช้อความ", {data: })
```

### code: 303

#### arj.seeOther(res,boolean,string, object)

```
arj.seeOther(res,true,"ช้อความ", {data: })
```

### code: 304

#### arj.notModified(res,boolean,string, object)

```
arj.notModified(res,true,"ช้อความ", {data: })
```

### code: 305

#### arj.useProxy(res,boolean,string, object)

```
arj.useProxy(res,true,"ช้อความ", {data: })
```

### code: 306

#### arj.switchProxy(res,boolean,string, object)

```
arj.switchProxy(res,true,"ช้อความ", {data: })
```

### code: 307

#### arj.temporaryRedirect(res,boolean,string, object)

```
arj.temporaryRedirect(res,true,"ช้อความ", {data: })
```

### code: 400

#### arj.badRequest(res,boolean,string, object)

```
arj.badRequest(res,true,"ช้อความ", {data: })
```

### code: 401

#### arj.unauthorized(res,boolean,string, object)

```
arj.unauthorized(res,true,"ช้อความ", {data: })
```


### code: 402

#### arj.paymentRequired(res,boolean,string, object)

```
arj.paymentRequired(res,true,"ช้อความ", {data: })
```


### code: 403

#### arj.forbidden(res,boolean,string, object)

```
arj.forbidden(res,true,"ช้อความ", {data: })
```

### code: 404

#### arj.notFound(res,boolean,string, object)

```
arj.notFound(res,true,"ช้อความ", {data: })
```

### code: 405

#### arj.methodNotAllowed(res,boolean,string, object)

```
arj.methodNotAllowed(res,true,"ช้อความ", {data: })
```

### code: 406

#### arj.notAcceptable(res,boolean,string, object)

```
arj.notAcceptable(res,true,"ช้อความ", {data: })
```

### code: 407

#### arj.proxyAuthenticationRequired(res,boolean,string, object)

```
arj.proxyAuthenticationRequired(res,true,"ช้อความ", {data: })
```

### code: 408

#### arj.requestTimeout(res,boolean,string, object)

```
arj.requestTimeout(res,true,"ช้อความ", {data: })
```

### code: 409

#### arj.conflict(res,boolean,string, object)

```
arj.conflict(res,true,"ช้อความ", {data: })
```

### code: 410

#### arj.gone(res,boolean,string, object)

```
arj.gone(res,true,"ช้อความ", {data: })
```

### code: 411

#### arj.lengthRequired(res,boolean,string, object)

```
arj.lengthRequired(res,true,"ช้อความ", {data: })
```

### code: 412

#### arj.preconditionFailed(res,boolean,string, object)

```
arj.preconditionFailed(res,true,"ช้อความ", {data: })
```

### code: 413

#### arj.requestEntityTooLarge(res,boolean,string, object)

```
arj.requestEntityTooLarge(res,true,"ช้อความ", {data: })
```

### code: 414

#### arj.requestURITooLong(res,boolean,string, object)

```
arj.requestURITooLong(res,true,"ช้อความ", {data: })
```


### code: 415

#### arj.unsupportedMediaType(res,boolean,string, object)

```
arj.unsupportedMediaType(res,true,"ช้อความ", {data: })
```

### code: 416

#### arj.requestedRangeNotSatisfiable(res,boolean,string, object)

```
arj.requestedRangeNotSatisfiable(res,true,"ช้อความ", {data: })
```

### code: 417

#### arj.expectationFailed(res,boolean,string, object)

```
arj.expectationFailed(res,true,"ช้อความ", {data: })
```

### code: 418

#### arj.imATeapot(res,boolean,string, object)

```
arj.imATeapot(res,true,"ช้อความ", {data: })
```

### code: 422

#### arj.unprocessableEntity(res,boolean,string, object)

```
arj.unprocessableEntity(res,true,"ช้อความ", {data: })
```

### code: 423

#### arj.locked(res,boolean,string, object)

```
arj.locked(res,true,"ช้อความ", {data: })
```

### code: 424

#### arj.failedDependency(res,boolean,string, object)

```
arj.failedDependency(res,true,"ช้อความ", {data: })
```

### code: 425

#### arj.unorderedCollection(res,boolean,string, object)

```
arj.unorderedCollection(res,true,"ช้อความ", {data: })
```

### code: 426

#### arj.upgradeRequired(res,boolean,string, object)

```
arj.upgradeRequired(res,true,"ช้อความ", {data: })
```

### code: 449

#### arj.retryWith(res,boolean,string, object)

```
arj.retryWith(res,true,"ช้อความ", {data: })
```

### code: 500

#### arj.internalServerError(res,boolean,string, object)

```
arj.internalServerError(res,true,"ช้อความ", {data: })
```

### code: 501

#### arj.notImplemented(res,boolean,string, object)

```
arj.notImplemented(res,true,"ช้อความ", {data: })
```

### code: 502

#### arj.badGateway(res,boolean,string, object)

```
arj.badGateway(res,true,"ช้อความ", {data: })
```

### code: 503

#### arj.serviceUnavailable(res,boolean,string, object)

```
arj.serviceUnavailable(res,true,"ช้อความ", {data: })
```

### code: 504

#### arj.gatewayTimeout(res,boolean,string, object)

```
arj.gatewayTimeout(res,true,"ช้อความ", {data: })
```

### code: 505

#### arj.HTTPVersionNotSupported(res,boolean,string, object)

```
arj.HTTPVersionNotSupported(res,true,"ช้อความ", {data: })
```

### code: 506

#### arj.variantAlsoNegotiates(res,boolean,string, object)

```
arj.variantAlsoNegotiates(res,true,"ช้อความ", {data: })
```

### code: 507

#### arj.insufficientStorage(res,boolean,string, object)

```
arj.insufficientStorage(res,true,"ช้อความ", {data: })
```

### code: 509

#### arj.bandwidthLimitExceeded(res,boolean,string, object)

```
arj.bandwidthLimitExceeded(res,true,"ช้อความ", {data: })
```

### code: 510

#### arj.notExtended(res,boolean,string, object)

```
arj.notExtended(res,true,"ช้อความ", {data: })
```