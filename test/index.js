import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

export function createTestRoot() {
    if (!window.document.body) {
        window.document.body = document.createElement("body")
    }
    const testRoot = document.createElement("div")
    document.body.appendChild(testRoot)
    return testRoot
}

import "./context.js"
import "./observer.js"
import "./issue21.js"
import "./misc.js"
import "./inject.js"
import "./propTypes.js"
import "./stateless.js"
import "./transactions.js"
