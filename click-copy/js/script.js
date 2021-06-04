var app = new Vue({
    el: '#dowebok',
    data: {
        text: '',
    },
    methods: {
        toCopy: function () {
            if (!this.text) {
                alert('请输入要复制的内容')
            } else {
                var copyInput = document.createElement('input')
                copyInput.setAttribute('value', this.text)
                document.body.appendChild(copyInput)
                copyInput.select()

                try {
                    var copyed = document.execCommand('copy')
                    if (copyed) {
                        document.body.removeChild(copyInput)
                        alert('复制成功')
                    }
                } catch {
                    alert('复制失败，请检查浏览器兼容')
                }
            }
        }
    }
})
