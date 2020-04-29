# 500 as a Service

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dvejmz/500aas/deploy?color=green&label=failing)

>Everything fails, all the time.

— Werner Vogels, VP & CTO, Amazon

Provide a planet-scale, elastic, resilient, secure and low-latency on-demand HTTP 500 service.

## SLA

500asaservice.com strives to achieve 11 zeroes (0.00000000001%) uptime<sup>†</sup>.

## Deployment

This service is designed to be deployed as a CloudFront-triggered Lambda@Edge function in AWS.

<sup>†</sup> Guaranteed SLO for well-formed HTTP/S requests
