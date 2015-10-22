module.exports = {
    aliasColors: {},
    bars: false,
    editable: true,
    error: false,
    fill: 0,
    grid: {
        leftMax: null,
        leftMin: null,
        rightMax: null,
        rightMin: null,
        threshold1: null,
        threshold1Color: 'rgba(216, 200, 27, 0.27)',
        threshold2: null,
        threshold2Color: 'rgba(234, 112, 112, 0.22)'
    },
    id: 2,
    legend: {
        avg: true,
        current: false,
        max: true,
        min: false,
        show: true,
        total: false,
        values: true
    },
    lines: true,
    linewidth: 1,
    links: [],
    nullPointMode: 'connected',
    percentage: false,
    pointradius: 5,
    points: false,
    renderer: 'flot',
    seriesOverrides: [{}],
    span: 4,
    stack: false,
    steppedLine: false,
    targets: [{
        target: 'target'
    }],
    title: 'custom title',
    tooltip: {
        shared: false,
        value_type: 'cumulative'
    },
    type: 'graph',
    'x-axis': true,
    'y-axis': true,
    y_formats: ['short', 'short']
}
