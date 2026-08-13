/**
 * Interactive Data Science Charts (Chart.js)
 * Khushali Kubavat Portfolio
 */

window.initPortfolioCharts = function () {
  if (typeof Chart === 'undefined') return;

  const data = window.portfolioData ? window.portfolioData.chartsData : null;
  if (!data) return;

  // Chart Global Dark Theme Configuration
  Chart.defaults.color = '#94A3B8';
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.plugins.tooltip.backgroundColor = '#0B1120';
  Chart.defaults.plugins.tooltip.titleColor = '#FFFFFF';
  Chart.defaults.plugins.tooltip.bodyColor = '#CBD5E1';
  Chart.defaults.plugins.tooltip.borderColor = 'rgba(59, 130, 246, 0.3)';
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;

  // 1. Sales Trend Chart
  const salesCanvas = document.getElementById('chart-sales-trend');
  if (salesCanvas) {
    const ctx = salesCanvas.getContext('2d');
    const gradientActual = ctx.createLinearGradient(0, 0, 0, 300);
    gradientActual.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
    gradientActual.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.salesTrend.labels,
        datasets: [
          {
            label: 'Actual Revenue ($k)',
            data: data.salesTrend.actual,
            borderColor: '#3B82F6',
            backgroundColor: gradientActual,
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#3B82F6',
            pointRadius: 4,
            pointHoverRadius: 7
          },
          {
            label: 'ML Predicted ($k)',
            data: data.salesTrend.predicted,
            borderColor: '#8B5CF6',
            borderDash: [6, 6],
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointBackgroundColor: '#8B5CF6',
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } }
        },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
          y: { grid: { color: 'rgba(255, 255, 255, 0.05)' } }
        }
      }
    });
  }

  // 2. Customer Growth Chart
  const growthCanvas = document.getElementById('chart-customer-growth');
  if (growthCanvas) {
    const ctx = growthCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.customerGrowth.labels,
        datasets: [
          {
            label: 'New Customers',
            data: data.customerGrowth.newCustomers,
            backgroundColor: '#06B6D4',
            borderRadius: 6
          },
          {
            label: 'Retained Accounts',
            data: data.customerGrowth.retainedCustomers,
            backgroundColor: '#3B82F6',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } }
        },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
          y: { grid: { color: 'rgba(255, 255, 255, 0.05)' } }
        }
      }
    });
  }

  // 3. Revenue Distribution Chart
  const revenueCanvas = document.getElementById('chart-revenue-dist');
  if (revenueCanvas) {
    const ctx = revenueCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.revenueDistribution.labels,
        datasets: [
          {
            data: data.revenueDistribution.data,
            backgroundColor: data.revenueDistribution.colors,
            borderWidth: 2,
            borderColor: '#0B1120',
            hoverOffset: 10
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { usePointStyle: true, padding: 16 } }
        },
        cutout: '68%'
      }
    });
  }

  // 4. Customer Clusters Scatter Chart
  const clustersCanvas = document.getElementById('chart-clusters');
  if (clustersCanvas) {
    const ctx = clustersCanvas.getContext('2d');
    const clusterColors = ['#3B82F6', '#EC4899', '#10B981', '#F59E0B'];

    const datasets = data.customerClusters.map((cluster, idx) => ({
      label: cluster.name,
      data: cluster.points,
      backgroundColor: clusterColors[idx % clusterColors.length],
      pointRadius: 7,
      pointHoverRadius: 10
    }));

    new Chart(ctx, {
      type: 'scatter',
      data: { datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: (Recency Score: ${context.parsed.x}, Spend Score: ${context.parsed.y})`;
              }
            }
          }
        },
        scales: {
          x: { title: { display: true, text: 'Purchase Recency Score' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
          y: { title: { display: true, text: 'Monetary Spend Score' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
        }
      }
    });
  }

  // 5. Model Metrics Chart
  const metricsCanvas = document.getElementById('chart-model-metrics');
  if (metricsCanvas) {
    const ctx = metricsCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.modelMetrics.models,
        datasets: [
          {
            label: 'Precision (%)',
            data: data.modelMetrics.precision,
            backgroundColor: '#3B82F6',
            borderRadius: 4
          },
          {
            label: 'Recall (%)',
            data: data.modelMetrics.recall,
            backgroundColor: '#8B5CF6',
            borderRadius: 4
          },
          {
            label: 'F1-Score (%)',
            data: data.modelMetrics.f1Score,
            backgroundColor: '#06B6D4',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } }
        },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
          y: { min: 60, max: 100, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
        }
      }
    });
  }
};
