var renderer;
var scene;
var camera;
function init() {
    /**
    * 创建场景对象Scene
    */
    var scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    // var geometry=new THREE.SphereGeometry(60,40,40);//创建一个球体几何对象
    var geometry = new THREE.BoxGeometry(100, 100, 100);//创建一个立方体几何对象Geometry
    var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff
    });//材质对象Material
    var mesh = new THREE.Mesh(geometry, material);//网格模型对象Mesh
    scene.add(mesh);//网格模型添加到场景中

    var geometry1 = new THREE.SphereGeometry(60, 40, 40);//创建一个立方体几何对象Geometry
    var material1 = new THREE.MeshLambertMaterial({
        color: 0x00ff00
    });//材质对象Material
    var mesh1 = new THREE.Mesh(geometry1, material1);//网格模型对象Mesh
    mesh1.translateY(120);
    scene.add(mesh1);//网格模型添加到场景中

    var geometry2 = new THREE.CylinderGeometry(50, 50, 100, 25);//创建一个立方体几何对象Geometry
    var material2 = new THREE.MeshLambertMaterial({
        color: 0xff0000
    });//材质对象Material
    var mesh2 = new THREE.Mesh(geometry2, material2);//网格模型对象Mesh
    // mesh2.translateX(120);
    mesh2.position.set(120, 0, 0);
    scene.add(mesh2);//网格模型添加到场景中

    //红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴
    var axesHelper = new THREE.AxesHelper(250);
    scene.add(axesHelper);

    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300);//电光源位置
    scene.add(point);//点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    // console.log(scene);
    // console.log(scene.children);
    /**
     * 相机设置
     */
    var width = window.innerWidth;//窗口宽度
    var height = window.innerHeight;//窗口高度
    var k = width / height;//窗口宽高比
    var s = 200;//三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200);//设置相机位置
    camera.lookAt(scene.position);//设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1);//设置背景颜色
    document.body.appendChild(renderer.domElement);//body元素中插入canvas对象
    //执行渲染操作     指定场景、相机作为参数
    // renderer.render(scene,camera);


    //渲染函数
    function render() {
        renderer.render(scene, camera);//执行渲染操作
        mesh.rotateY(0.01);//每次绕Y轴旋转0.01弧度
        mesh1.rotateX(0.01);//每次绕Y轴旋转0.01弧度
        mesh2.rotateZ(0.01);//每次绕Y轴旋转0.01弧度
        requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
    }
    render();

    //创建空间对象 相机对象camera作为参数 控件可以监听鼠标的变化，改变相机对象的属性
    var controls = new THREE.OrbitControls(camera);
    //监听鼠标事件，触发渲染函数，更新canvas画布渲染效果
    // controls.addEventListener("change",render);
}
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


window.onload = init;