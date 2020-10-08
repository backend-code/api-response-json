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

arj.ok(true,"ช้อความ", {data: })

```

## component

### code: 100

#### arj.continue(boolean,string, object)

```
arj.continue(true,"ช้อความ", {data: })
```

### code: 101

#### arj.switchingProtocols(boolean,string, object)

```
arj.switchingProtocols(true,"ช้อความ", {data: })
```

### code: 102

#### arj.processing(boolean,string, object)

```
arj.processing(true,"ช้อความ", {data: })
```

### code: 102

#### arj.processing(boolean,string, object)

```
arj.processing(true,"ช้อความ", {data: })
```

### code: 200

#### arj.ok(boolean,string, object)

```
arj.ok(true,"ช้อความ", {data: })
```

### code: 201

#### arj.ok(boolean,string, object)

```
arj.create(true,"ช้อความ", {data: })
```

### code: 202

#### arj.accepted(boolean,string, object)

```
arj.accepted(true,"ช้อความ", {data: })
```

### code: 203

#### arj.nonAuthoritativeInformation(boolean,string, object)

```
arj.nonAuthoritativeInformation(true,"ช้อความ", {data: })
```

### code: 204

#### arj.noContent(boolean,string, object)

```
arj.noContent(true,"ช้อความ", {data: })
```

### code: 205

#### arj.resetContent(boolean,string, object)

```
arj.resetContent(true,"ช้อความ", {data: })
```

### code: 206

#### arj.partialContent(boolean,string, object)

```
arj.partialContent(true,"ช้อความ", {data: })
```

### code: 207

#### arj.multiStatus(boolean,string, object)

```
arj.multiStatus(true,"ช้อความ", {data: })
```

### code: 300

#### arj.multipleChoices(boolean,string, object)

```
arj.multipleChoices(true,"ช้อความ", {data: })
```

### code: 301

#### arj.movedPermanently(boolean,string, object)

```
arj.movedPermanently(true,"ช้อความ", {data: })
```

### code: 302

#### arj.found(boolean,string, object)

```
arj.found(true,"ช้อความ", {data: })
```

### code: 303

#### arj.seeOther(boolean,string, object)

```
arj.seeOther(true,"ช้อความ", {data: })
```

### code: 304

#### arj.notModified(boolean,string, object)

```
arj.notModified(true,"ช้อความ", {data: })
```

### code: 305

#### arj.useProxy(boolean,string, object)

```
arj.useProxy(true,"ช้อความ", {data: })
```

### code: 306

#### arj.switchProxy(boolean,string, object)

```
arj.switchProxy(true,"ช้อความ", {data: })
```

### code: 307

#### arj.temporaryRedirect(boolean,string, object)

```
arj.temporaryRedirect(true,"ช้อความ", {data: })
```

### code: 400

#### arj.badRequest(boolean,string, object)

```
arj.badRequest(true,"ช้อความ", {data: })
```

### code: 401

#### arj.unauthorized(boolean,string, object)

```
arj.unauthorized(true,"ช้อความ", {data: })
```


### code: 402

#### arj.paymentRequired(boolean,string, object)

```
arj.paymentRequired(true,"ช้อความ", {data: })
```


### code: 403

#### arj.forbidden(boolean,string, object)

```
arj.forbidden(true,"ช้อความ", {data: })
```

### code: 404

#### arj.notFound(boolean,string, object)

```
arj.notFound(true,"ช้อความ", {data: })
```

### code: 405

#### arj.methodNotAllowed(boolean,string, object)

```
arj.methodNotAllowed(true,"ช้อความ", {data: })
```

### code: 406

#### arj.notAcceptable(boolean,string, object)

```
arj.notAcceptable(true,"ช้อความ", {data: })
```

### code: 407

#### arj.proxyAuthenticationRequired(boolean,string, object)

```
arj.proxyAuthenticationRequired(true,"ช้อความ", {data: })
```

### code: 408

#### arj.requestTimeout(boolean,string, object)

```
arj.requestTimeout(true,"ช้อความ", {data: })
```

### code: 409

#### arj.conflict(boolean,string, object)

```
arj.conflict(true,"ช้อความ", {data: })
```

### code: 410

#### arj.gone(boolean,string, object)

```
arj.gone(true,"ช้อความ", {data: })
```

### code: 411

#### arj.lengthRequired(boolean,string, object)

```
arj.lengthRequired(true,"ช้อความ", {data: })
```

### code: 412

#### arj.preconditionFailed(boolean,string, object)

```
arj.preconditionFailed(true,"ช้อความ", {data: })
```

### code: 413

#### arj.requestEntityTooLarge(boolean,string, object)

```
arj.requestEntityTooLarge(true,"ช้อความ", {data: })
```

### code: 414

#### arj.requestURITooLong(boolean,string, object)

```
arj.requestURITooLong(true,"ช้อความ", {data: })
```


### code: 415

#### arj.unsupportedMediaType(boolean,string, object)

```
arj.unsupportedMediaType(true,"ช้อความ", {data: })
```

### code: 416

#### arj.requestedRangeNotSatisfiable(boolean,string, object)

```
arj.requestedRangeNotSatisfiable(true,"ช้อความ", {data: })
```

### code: 417

#### arj.expectationFailed(boolean,string, object)

```
arj.expectationFailed(true,"ช้อความ", {data: })
```

### code: 418

#### arj.imATeapot(boolean,string, object)

```
arj.imATeapot(true,"ช้อความ", {data: })
```

### code: 422

#### arj.unprocessableEntity(boolean,string, object)

```
arj.unprocessableEntity(true,"ช้อความ", {data: })
```

### code: 423

#### arj.locked(boolean,string, object)

```
arj.locked(true,"ช้อความ", {data: })
```

### code: 424

#### arj.failedDependency(boolean,string, object)

```
arj.failedDependency(true,"ช้อความ", {data: })
```

### code: 425

#### arj.unorderedCollection(boolean,string, object)

```
arj.unorderedCollection(true,"ช้อความ", {data: })
```

### code: 426

#### arj.upgradeRequired(boolean,string, object)

```
arj.upgradeRequired(true,"ช้อความ", {data: })
```

### code: 449

#### arj.retryWith(boolean,string, object)

```
arj.retryWith(true,"ช้อความ", {data: })
```

### code: 500

#### arj.internalServerError(boolean,string, object)

```
arj.internalServerError(true,"ช้อความ", {data: })
```

### code: 501

#### arj.notImplemented(boolean,string, object)

```
arj.notImplemented(true,"ช้อความ", {data: })
```

### code: 502

#### arj.badGateway(boolean,string, object)

```
arj.badGateway(true,"ช้อความ", {data: })
```

### code: 503

#### arj.serviceUnavailable(boolean,string, object)

```
arj.serviceUnavailable(true,"ช้อความ", {data: })
```

### code: 504

#### arj.gatewayTimeout(boolean,string, object)

```
arj.gatewayTimeout(true,"ช้อความ", {data: })
```

### code: 505

#### arj.HTTPVersionNotSupported(boolean,string, object)

```
arj.HTTPVersionNotSupported(true,"ช้อความ", {data: })
```

### code: 506

#### arj.variantAlsoNegotiates(boolean,string, object)

```
arj.variantAlsoNegotiates(true,"ช้อความ", {data: })
```

### code: 507

#### arj.insufficientStorage(boolean,string, object)

```
arj.insufficientStorage(true,"ช้อความ", {data: })
```

### code: 509

#### arj.bandwidthLimitExceeded(boolean,string, object)

```
arj.bandwidthLimitExceeded(true,"ช้อความ", {data: })
```

### code: 510

#### arj.notExtended(boolean,string, object)

```
arj.notExtended(true,"ช้อความ", {data: })
```